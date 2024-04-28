import { ButtonHTMLAttributes, ExoticComponent } from 'react';
import { IconProps } from '@phosphor-icons/react';

import styles from './style.module.scss';

type IconButtonProps = {
  icon: ExoticComponent<IconProps>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function IconButton(props: IconButtonProps) {
  return (
    <button {...props} className={`${styles.button} ${props.className || ''}`}>
      <props.icon size={16} />
    </button>
  );
}
