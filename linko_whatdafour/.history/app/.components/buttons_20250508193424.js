'use client';
import { useRouter } from 'next/navigation';
import classnames from "classnames";
import styles from './buttons.module.css';


export const Button = ({buttonText, onClick, type, size}) => {



  const buttonClasses = classnames(styles.button, {
    [styles.small]: size === "small",
    [styles.big]: size === "big",
    [styles.purple]: type === "purple",
    [styles.pink]: type === "pink",
  });
  return (
  
  <button
  onClick={onClickHandler}
  >
  
  {buttonText}
  
  </button>
  
  )
};























/*export const BigPinkButton = ({ 
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
  };*/
  
  
  