import React from 'react';
import styles from './tagsmodal.module.css';

export default function TagsModal({ isOpen, tags, onToggleTag, onCancel, onDone, title }) {
  if (!isOpen) return null;
  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.tagsRow}>
          {tags.map((tag, idx) => (
            <button
              key={tag.label}
              className={tag.selected ? styles.tagSelected : styles.tagUnselected}
              onClick={() => onToggleTag(idx)}
              type="button"
            >
              {tag.label}
            </button>
          ))}
        </div>
        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onCancel}>Cancel</button>
          <button className={styles.doneBtn} onClick={onDone}>Done</button>
        </div>
      </div>
    </div>
  );
} 