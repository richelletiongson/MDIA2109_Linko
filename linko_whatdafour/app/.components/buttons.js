import { useRouter } from 'next/navigation';
import classnames from "classnames";
import styles from './buttons.module.css';


export const Button = ({buttonText, onClick, type, size}) => {



  const buttonClasses = classnames(styles.button, {
    [styles.big]: size === "big",
    [styles.medium]: size === "medium",
    [styles.small]: size === "small",
    [styles.smaller]: size === "smaller",
    [styles.big-round]: size === "big-round",
    [styles.small-round]: size === "small-round",
    [styles.big-pill]: size === "big-pill",
    [styles.small-pill]: size === "small-pill",
    [styles.long]: size === "long",
    [styles.pink]: type === "pink",
    [styles.purple]: type === "purple",
    [styles.light-purple]: type === "light-purple",
    [styles.dark-purple]: type === "dark-purple",
    [styles.green]: type === "green",
    [styles.white]: type === "white",
    [styles.transparent-border]: type === "transparent-border",
    [styles.transparent]: type === "transparent",
  });
  return (
  
  <button
  className={buttonClasses}
  onClick={onClick}
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
  
  
  