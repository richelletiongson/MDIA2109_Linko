import styles from './tagsmodal.module.css';
import Button from '../buttons';

export default function TagsModal({ tags, onToggleTag, onCancel, onDone, title }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3 className={styles.modalTitle}>{title}</h3>
        <div className={styles.modalTags}>
          {tags && tags.map((tag, idx) => (
            <Button
              key={tag.id}
              buttonText={tag.text}
              type={tag.active ? 'green' : 'white'}
              size="big_pill"
              onClick={() => onToggleTag(idx)}
            />
          ))}
        </div>
        <div className={styles.modalActions}>
          <Button onClick={onCancel} buttonText="Cancel" type="pink" size="small" />
          <Button onClick={onDone} buttonText="Done" type="pink" size="small" />
        </div>
      </div>
    </div>
  );
}