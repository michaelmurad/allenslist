import { Item } from '@types';
import styles from '@styles/components/ExpensiveItem.module.scss';
import Link from 'next/link';

export const ExpensiveItem = ({
  item,
}: {
  item: Item;
}): React.ReactElement | null => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{item.title}</div>
      <Link href={item.url}>
        <img src={item.image} alt={item.title} />
      </Link>
      <div className={styles.description}>{item.description}</div>
    </div>
  );
};
