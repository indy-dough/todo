import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

import styles from './style.module.scss';

type NextLinkButtonProps = {
  pressed?: boolean;
  secondary?: boolean;
  className?: string;
  children: ReactNode;
} & LinkProps;

export function NextLinkButton({
  pressed,
  secondary,
  ...props
}: NextLinkButtonProps) {
  return (
    <Link
      {...props}
      data-pressed={pressed}
      data-theme={secondary ? 'secondary' : 'default'}
      className={`${styles.button} ${props.className || ''}`}
    />
  );
}
