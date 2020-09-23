import styles from '@styles/components/Item.module.css';
import { ItemProps } from '@types';

export const Item = ({
  url,
  description,
  image,
  title,
}: ItemProps): React.ReactElement => {
  console.log({ image });
  return (
    <a href={url} key={url} className={styles.item}>
      <img alt="preview" src={image} />
      <title>{title}</title>
      <div className={styles.itemDescription}>{description}</div>
    </a>
  );
};
