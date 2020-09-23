import '@styles/globals.css';
import styles from '@styles/components/Item.module.css';
import { ItemProps } from '@types';

export const Item = ({
  url,
  description,
  image,
  title,
}: ItemProps): React.ReactElement => {
  return (
    <a href={url} key={url} className={styles.item}>
      {image && <img alt="preview" src={image} />}
      {title && <div className={styles.itemTitle}>{title}</div>}
      <div className={styles.itemDescription}>{description}</div>
    </a>
  );
};
