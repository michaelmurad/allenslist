import React from 'react';
import { useRecoilValue } from 'recoil';

import styles from '@styles/components/Items.module.scss';
import { itemSelector } from '@state/items';
import { Spinner } from '@components/spinner';
import { Item } from '@components/item';
import { FaunaQueryData, Item as ItemInterface } from '@types';

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
        <p>there are no overpriced items</p>
        <p>someone should add one</p>
      </div>
    );
  }
  return (
    <div className={styles.itemContainer}>
      {items.map(({ data, ref }: FaunaQueryData<ItemInterface>) => {
        const { description, image, url, title } = data as ItemInterface;
        return (
          <Item
            title={title}
            description={description}
            image={image}
            url={url}
            key={title}
            id={ref['@ref'].id}
          />
        );
      })}
    </div>
  );
};
