import React from 'react';
import { useRecoilValue } from 'recoil';

import styles from '@styles/components/Items.module.css';
import { itemSelector } from '@state/items';
import { Spinner } from '@components/spinner';
import { Item } from '@components/item';
import { FaunaItem, Item as ItemInterface } from '@types';

export const Items = (): React.ReactElement => {
  const { items, error } = useRecoilValue(itemSelector);
  if (error) return <div className={styles.itemContainer}>{error}</div>;
  if (!items)
    return (
      <div className={styles.itemContainer}>
        <Spinner />
      </div>
    );
  if (!items.length) {
    return (
      <div className={styles.empty}>
        <p>interesting</p>
        <p>there are no overpriced items for us to waste our money on.</p>
        <p>someone should add one</p>
      </div>
    );
  }
  return (
    <div className={styles.itemContainer}>
      {items.map(({ data }: FaunaItem) => {
        const { description, img, url } = data as ItemInterface;
        return (
          <Item
            description={description}
            img={img}
            url={url}
            key={description + Math.random()}
          />
        );
      })}
    </div>
  );
};
