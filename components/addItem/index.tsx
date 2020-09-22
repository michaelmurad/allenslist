/* eslint-disable jsx-a11y/no-autofocus */
import { useState } from 'react';
import firebase from 'firebase';
import { useRecoilState } from 'recoil';

import styles from '@styles/components/AddItem.module.css';
import { fetcher } from '@utilities/fetcher';
import { itemState } from '@state/items';
import { Button } from '@components/button';

export const AddItem = (): React.ReactElement => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useRecoilState(itemState);

  const onClick = async () => {
    if (!text) {
      return setError('You gotta type something');
    }
    const token = await firebase
      .auth()
      .currentUser?.getIdToken(/* forceRefresh */ true);

    const body = {
      url: text,
      token,
    };
    setLoading(true);
    const { data, error: fetcherError } = await fetcher(
      'api/items',
      'POST',
      body
    );
    setLoading(false);
    if (fetcherError) {
      return setError(fetcherError);
    }

    setText('');
    setSuccess('Yay! You helped make us go even more broke!');
    setItems(JSON.stringify([data, ...JSON.parse(items)]));
  };
  return (
    <form className={styles.form}>
      <span>
        <label htmlFor="addItem">url of item</label>
        <input
          autoFocus
          placeholder="paste that url here"
          id="addItem"
          onChange={(e) => {
            setText(e.target.value);
            setError('');
            setSuccess('');
          }}
          value={text}
        />
        <br />
      </span>
      {error && <div className={styles.error}>{error}</div>}
      {success && <div className={styles.success}>{success}</div>}
      {loading && <div className={styles.success}>Adding Item...</div>}
      <Button
        disabled={loading || !!error}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        label="Add Item"
      />
    </form>
  );
};
