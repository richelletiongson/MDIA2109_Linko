import { useRouter } from 'next/navigation';
import styles from './components.module.css';

const BigPinkButton = ({ 
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
          className={styles.nextButton}
          type="button"
        >
          {buttonText}
        </button>
      </div>
    );
  };
  
  export default BigPinkButton;
  
  