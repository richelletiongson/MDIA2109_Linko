"use client";

import styles from './input_field.module.css';
import { useRouter } from "next/navigation";

export default function InputField({ 
  variant = 'send', 
  placeholder = "Type...",
  value,
  onChange,
  onSubmit,
  ...props 
}) {
  const router = useRouter();
  
  const handleClick = () => {
    if (onSubmit) {
      onSubmit(value);
    } else {
      router.push("/profile");
    }
  };

  if (variant === 'send') {
    return (
      <div className={styles.sendBox} {...props}>
        <input 
          className={styles.sendInput} 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div className={styles.sendIcon} onClick={handleClick}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.2039 5.57463C26.9595 5.33201 26.653 5.16145 26.318 5.08169C25.9831 5.00194 25.6326 5.01607 25.3051 5.12254L6.40802 11.4259C6.05756 11.5369 5.74786 11.7493 5.51805 12.0363C5.28824 12.3233 5.14862 12.6719 5.11683 13.0382C5.08504 13.4044 5.16251 13.7719 5.33944 14.0942C5.51638 14.4164 5.78485 14.679 6.11094 14.8488L13.9514 18.7238L17.8264 26.59C17.9821 26.8979 18.2204 27.1565 18.5147 27.3367C18.809 27.5169 19.1476 27.6117 19.4926 27.6105H19.6218C19.9913 27.5832 20.3441 27.4455 20.6344 27.2152C20.9246 26.9848 21.1389 26.6725 21.2493 26.3188L27.643 7.47338C27.7572 7.14779 27.7765 6.79647 27.6988 6.46032C27.621 6.12417 27.4494 5.81702 27.2039 5.57463ZM7.20886 13.2084L23.7034 7.70588L14.5455 16.8638L7.20886 13.2084ZM19.583 25.5696L15.9147 18.233L25.0726 9.07504L19.583 25.5696Z" fill="#9B71F1"/>
          </svg>
        </div>
      </div>
    );
  }

  if (variant === 'border') {
    return (
      <div className={styles.borderBox} {...props}>
        <input 
          className={styles.borderInput} 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }

  if (variant === 'rounded') {
    return (
      <div className={styles.roundedBox} {...props}>
        <span className={styles.roundedText}>Aa</span>
        <button className={styles.roundedBtn} onClick={handleClick}></button>
      </div>
    );
  }

  if (variant === 'rect') {
    return (
      <div className={styles.rectBox} {...props}>
        {}
      </div>
    );
  }

  return null;
}