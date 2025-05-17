import {createPortal} from "react-dom";
import { useState, useEffect } from 'react';
import styles from './tagsmodal.module.css';
import Button from "../buttons";

const TagsModal = ({ 
  title = "Edit Tags",
  modalTitle = "Choose what you want visible on your profile!",
  initialTags = [],
  onSave,
  buttonText = "Edit",
  onToggleTag,
  onCancel,
  onDone
}) => {
  // State for tags
  const [tags, setTags] = useState(initialTags);
  
  
  // Update tags when initialTags prop changes
  useEffect(() => {
    setTags(initialTags);
  }, [initialTags]);
  
  // Toggle tag active status
  const toggleTag = (id) => {
    setTags(tags.map(tag => 
      tag.id === id ? { ...tag, active: !tag.active } : tag
    ));
  };
  
 
  // Save changes and close modal
  const saveChanges = () => {
    if (onSave) {
      onSave(tags);
    }
  };
  
  // Helper to get Button type based on color and active state
  const getTagType = (tag) => {
    if (!tag.active) return 'white';
    switch(tag.color) {
      case 'green': return 'green';
      case 'purple': return 'light_purple';
      case 'blue': return 'light_purple';
      case 'yellow': return 'green';
      case 'red': return 'pink';
      default: return 'green';
    }
  };
  
  const modalContent = (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3 className={styles.modalTitle}>{title}</h3>
        <div className={styles.modalTags}>
          {tags.map((tag, idx) => (
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
          <Button onClick={onCancel} buttonText="Cancel" type="pink" size="big" />
          <Button onClick={onDone} buttonText="Done" type="pink" size="big" />
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body)
};

export default TagsModal;