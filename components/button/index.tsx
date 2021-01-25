import styles from '@styles/components/Button.module.scss';
import { ButtonProps } from '@types';

export const Button = ({
  onClick,
  label,
  disabled,
}: ButtonProps): React.ReactElement => (
  <button
    className={`${styles.button} ${disabled && styles.disabled}`}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);
