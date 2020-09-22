import styles from '@styles/components/Item.module.css';
import { ItemProps } from '@types';

export const Item = ({
  url,
  description,
  img,
}: ItemProps): React.ReactElement => (
  <a href={url} key={url} className={styles.item}>
    <img alt="preview" src={img} />
    <div className={styles.itemDescription}>{description}</div>
  </a>
);
