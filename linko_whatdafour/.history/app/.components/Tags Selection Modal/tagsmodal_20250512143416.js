import { useState, useEffect } from 'react';
import styles from './tagsmodal.module.css';
import Button from "@/app/.components/buttons";

const TagsModal = ({ 
  title = "Edit Tags",
  modalTitle = "Choose what you want visible on your profile!",
  initialTags = [],
  onSave,
  buttonText = "Edit"
}) => {
  // State for tags
  const [tags, setTags] = useState(initialTags);
  
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
  
  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  // Close modal without saving changes
  const closeModal = () => {
    // Reset tags to initial state
    setTags(initialTags);
    setIsModalOpen(false);
  };
  
  // Save changes and close modal
  const saveChanges = () => {
    if (onSave) {
      onSave(tags);
    }
    setIsModalOpen(false);
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
  
  return (
    <div className={styles.container}>
      {/* Section with visible tags */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        
        <div className={styles.tagsContainer}>
          {tags.filter(tag => tag.active).map(tag => (
            <Button
              key={tag.id}
              buttonText={tag.text}
              type={getTagType(tag)}
              size="big_pill"
              onClick={() => {}}
            />
          ))}
        </div>
        
        <Button 
          onClick={openModal}
          buttonText={buttonText}
          type="transparent_greentxt"
          size="long"
          border="green_border"
        />
      </div>
      
      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>
              {modalTitle}
            </h3>
            
            <div className={styles.modalTags}>
              {tags.map(tag => (
                <Button
                  key={tag.id}
                  buttonText={tag.text}
                  type={getTagType(tag)}
                  size="big_pill"
                  onClick={() => toggleTag(tag.id)}
                />
              ))}
            </div>
            
            <div className={styles.modalActions}>
              <Button 
                onClick={closeModal}
                buttonText="Cancel"
                type="pink"
                size="big"
              />
              
              <Button 
                onClick={saveChanges}
                buttonText="Done"
                type="pink"
                size="big"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TagsModal;