import React from 'react';
import styles from './tagsmodal.module.css';
import { Button } from '../.components/buttons';

export default function TagsModal({ isOpen, tags, onToggleTag, onCancel, onDone, title }) {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.tagsRow}>
          {tags.map((tag, idx) => (
            <Button
              key={tag.label}
              buttonText={tag.label}
              onClick={() => onToggleTag(idx)}
              type={tag.selected ? (idx % 2 === 0 ? 'light_purple' : 'green') : 'white'}
              size="big_pill"
            />
          ))}
        </div>
        <div className={styles.actions}>
          <Button buttonText="Cancel" onClick={onCancel} type="pink" size="big" />
          <Button buttonText="Done" onClick={onDone} type="pink" size="big" />
        </div>
      </div>
    </div>
  );
} 