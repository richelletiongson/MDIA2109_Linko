import { useRouter } from 'next/navigation';
import classnames from "classnames";
import styles from './buttons.module.css';


export default function Button({buttonText, onClick, type, size, border}){



  const buttonClasses = classnames(styles.button, {
    [styles.big]: size === "big",
    [styles.medium]: size === "medium",
    [styles.small]: size === "small",
    [styles.smaller]: size === "smaller",
    [styles.big_round]: size === "big_round",
    [styles.small_round]: size === "small_round",
    [styles.big_pill]: size === "big_pill",
    [styles.small_pill]: size === "small_pill",
    [styles.long]: size === "long",
    [styles.pink]: type === "pink",
    [styles.purple]: type === "purple",
    [styles.light_purple]: type === "light_purple",
    [styles.dark_purple]: type === "dark_purple",
    [styles.green]: type === "green",
    [styles.white]: type === "white",
    [styles.transparent_pinkborder]: type === "transparent_pinkborder",
    [styles.transparent_whitetxt]: type === "transparent_whitetxt",
    [styles.transparent_greentxt]: type === "transparent_greentxt",
    [styles.pink_border]: border === "pink_border",
    [styles.green_border]: border === "green_border",
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
  
  
  