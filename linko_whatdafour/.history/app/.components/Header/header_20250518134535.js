import React from 'react';
import styles from './header.module.css';

export default function Header({ leftButton, rightButton, children }) {
  return (
    <header className={styles.header}>
      <div className={styles.side}>{leftButton}</div>
      <div className={styles.center}>{children ? children : <div className={styles.logo}>Logo</div>}</div>
      <div className={styles.side}>{rightButton}</div>
    </header>
  );
} 