import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '@styles/components/Header.module.scss';
import { HeaderInner } from './headerInner';

export const Header = ({
  title,
  showOuterHeader = true,
}: {
  title?: string;
  showOuterHeader?: boolean;
}): React.ReactElement => {
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
        {/* <!-- Primary Meta Tags --> */}
        <title>
          allenslist - a curated list of expensive shit allen makes us want to
          buy
        </title>
        <meta name="title" content="allenslist"></meta>
        <meta
          name="description"
          content="a curated list of expensive shit allen makes us want to buy"
        ></meta>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://metatags.io/"></meta>
        <meta property="og:title" content="allenslist"></meta>
        <meta
          property="og:description"
          content="a curated list of expensive shit allen makes us want to buy"
        ></meta>
        <meta
          property="og:image"
          content={'https://i.ibb.co/frjqFYm/allenslist-meta-img.png'}
        ></meta>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://metatags.io/"></meta>
        <meta property="twitter:title" content="allenslist"></meta>
        <meta
          property="twitter:description"
          content="curated list of expensive shit allen makes us want to buy"
        ></meta>
        <meta
          property="twitter:image"
          content="https://i.ibb.co/frjqFYm/allenslist-meta-img.png"
        ></meta>
      </Head>
      {showOuterHeader ? (
        <div className={styles.outerContainer}>
          <div className={styles.titleContainer}>
            <Image
              width={90}
              height={80}
              alt="crying wallet"
              src="/images/logo.png"
            />
            <h1 className={styles.title}>allenslist</h1>
          </div>
          <p className={styles.description}>
            a curated list of expensive shit allen makes us want to buy
          </p>
        </div>
      ) : null}
      <div
        className={`${styles.stickyWrapper} ${isSticky ? styles.sticky : ''}`}
        ref={ref}
      >
        <HeaderInner />
      </div>
    </>
  );
};
