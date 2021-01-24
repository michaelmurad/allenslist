import Link from 'next/link';
import styles from '@styles/components/Item.module.css';
import { ItemProps } from '@types';

export const Item = ({
  url,
  description,
  image,
  title,
  id,
}: ItemProps): React.ReactElement => {
  return (
    <Link href={`/expensive-item/${id}`} key={id}>
      <div className={styles.item}>
        {image && <img alt="preview" src={image} />}
        {title && <div className={styles.itemTitle}>{title}</div>}
      </div>
    </Link>
  );
};
