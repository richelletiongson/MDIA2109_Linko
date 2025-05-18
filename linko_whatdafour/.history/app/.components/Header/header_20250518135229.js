import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';

export default function Header({ leftButton, rightButton }) {
  return (
    <header className={styles.header}>
      <div className={styles.side}>{leftButton}</div>
      <div className={styles.center}>
        <Image src="/logos/linko_primarylogo.svg" alt="Linko logo" width={130} height={30} />
      </div>
      <div className={styles.side}>{rightButton}</div>
    </header>
  );
} 