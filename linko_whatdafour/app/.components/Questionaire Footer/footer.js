import React from 'react';
import styles from './footer.module.css';

// Usage: <QuestionaireFooter left={...} center={...} right={...} />
export default function QuestionaireFooter({ leftButton, centerButton, rightButton }) {
  return (
    <div className={styles.footerRow}>
      <div className={styles.footerLeft}>{leftButton}</div>
      <div className={styles.footerCenter}>{centerButton}</div>
      <div className={styles.footerRight}>{rightButton}</div>
    </div>
  );
}
