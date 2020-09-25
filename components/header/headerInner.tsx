import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRecoilState } from 'recoil';

import styles from '@styles/components/Header.module.css';
import { userState } from '@state/user';
import Modal from '@components/Modal';
import { SigninProps } from '@types';

const DynamicAddItem = dynamic(
  async (): Promise<any> => {
    const { AddItem } = await import('../addItem');
    return AddItem;
  }
);

const DynamicSignin = dynamic(
  async (): Promise<React.FunctionComponent<SigninProps>> => {
    const { Signin } = await import('../signin');
    return Signin;
  }
);

export const HeaderInner = (): React.ReactElement => {
  const [showSignin, setShowSignin] = useState(false);
  const [showAddItem, setAddItem] = useState(false);
  const [user] = useRecoilState(userState);

  const handleShowSignin = () => setShowSignin((prevState) => !prevState);
  const handleShowAddItem = () => setAddItem((prevState) => !prevState);
  const userPhoto = user?.photoURL ? (
    <img alt={user.displayName as string} src={user?.photoURL as string}></img>
  ) : (
    user.displayName
  );
  const isSignedIn = !!user?.displayName;
  const onClickAddItem = isSignedIn ? handleShowAddItem : handleShowSignin;
  return (
    <div className={styles.headerInner}>
      {showSignin ? (
        <Modal onClick={handleShowSignin}>
          <DynamicSignin
            handleShowSignin={handleShowSignin}
            isSignedIn={isSignedIn}
          />
        </Modal>
      ) : null}
      {showAddItem ? (
        <Modal onClick={handleShowAddItem}>
          <DynamicAddItem />
        </Modal>
      ) : null}
      <div className={styles.stickyInner}>
        <Link href="/">allenslist</Link>
        {isSignedIn && (
          <div
            className={styles.headerItem}
            onClick={onClickAddItem}
            onKeyDown={onClickAddItem}
            role="button"
            tabIndex={0}
          >
            add an overpriced item
          </div>
        )}
        <div
          className={styles.headerItem}
          onClick={handleShowSignin}
          onKeyDown={handleShowSignin}
          role="button"
          tabIndex={-1}
        >
          {user?.displayName ? userPhoto : 'SignIn to add an overpriced item'}
        </div>
      </div>
    </div>
  );
};
