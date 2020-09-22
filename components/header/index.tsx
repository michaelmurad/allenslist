import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

import styles from '@styles/components/Header.module.css';
import { HeaderInner } from './headerInner';

export const Header = ({ title }: { title?: string }): React.ReactElement => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>allenslist {title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.outerContainer}>
        <div className={styles.titleContainer}>
          <img alt="crying wallet" src="/images/logo.png"></img>
          <h1 className={styles.title}>allenslist</h1>
        </div>
        <p className={styles.description}>
          a curated list of expensive shit allen makes us want to buy
        </p>
      </div>
      <div
        className={`${styles.stickyWrapper} ${isSticky ? styles.sticky : ''}`}
        ref={ref}
      >
        <HeaderInner />
      </div>
    </>
  );
};
