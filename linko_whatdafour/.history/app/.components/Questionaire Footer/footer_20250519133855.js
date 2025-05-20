import React from 'react';
import styles from './footer.module.css';

// Usage: <QuestionaireFooter left={...} center={...} right={...} />
export default function QuestionaireFooter({ left, center, right }) {
  return (
    <div className={styles.footerRow}>
      <div className={styles.footerLeft}>{left}</div>
      <div className={styles.footerCenter}>{center}</div>
      <div className={styles.footerRight}>{right}</div>
    </div>
  );
}
