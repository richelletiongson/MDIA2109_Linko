import { useState, useEffect } from 'react';
import styles from './TagsModal.module.css';

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
  
  // Helper to get CSS class based on color and active state
  const getTagClass = (tag) => {
    if (!tag.active) return styles.inactiveTag;
    
    switch(tag.color) {
      case 'green':
        return styles.greenTag;
      case 'purple':
        return styles.purpleTag;
      case 'blue':
        return styles.blueTag;
      case 'yellow':
        return styles.yellowTag;
      case 'red':
        return styles.redTag;
      default:
        return styles.defaultTag;
    }
  };
  
  return (
    <div className={styles.container}>
      {/* Section with visible tags */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        
        <div className={styles.tagsContainer}>
          {tags.filter(tag => tag.active).map(tag => (
            <span 
              key={tag.id} 
              className={`${styles.tag} ${getTagClass(tag)}`}
            >
              {tag.text}
            </span>
          ))}
        </div>
        
        <button 
          onClick={openModal}
          className={styles.editButton}
        >
          {buttonText}
        </button>
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
                <button 
                  key={tag.id} 
                  onClick={() => toggleTag(tag.id)}
                  className={`${styles.tagButton} ${getTagClass(tag)}`}
                >
                  {tag.text}
                </button>
              ))}
            </div>
            
            <div className={styles.modalActions}>
              <button 
                onClick={closeModal}
                className={styles.cancelButton}
              >
                Cancel
              </button>
              
              <button 
                onClick={saveChanges}
                className={styles.doneButton}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TagsModal;