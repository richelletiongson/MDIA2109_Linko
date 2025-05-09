'use client';

import { useRouter } from 'next/navigation';
import styles from './components.module.css';

export const BigPinkButton = ({ 
    route, 
    buttonText = 'Next', 
  }) => {
    const router = useRouter();
  
    // Handle navigation to the specified route
    const handleNavigation = () => {
      // Navigate to the specified route
      router.push(route);
    };
  
    return (
      <div className={styles.buttonContainer}>
        <button 
          onClick={handleNavigation}
          className={styles.bigPinkButton}
          type="button"
        >
          {buttonText}
        </button>
      </div>
    );
  };

  export const BigPurpleButton = ({ 
    route,
    buttonText = 'GET STARTED',
    onClick = null 
  }) => {
    const router = useRouter();
  
    // Handle navigation to the specified route
    const handleNavigation = () => {
      // Navigate to the specified route
      router.push(route);
    };
  
    return (
      <div className={styles.buttonContainer}>
        <button 
          onClick={handleNavigation}
          className={styles.bigPurpleButton}
          type="button"
        >
          {buttonText}
        </button>
      </div>
    );
  };
  
  
  