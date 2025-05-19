import React from 'react';
import Image from 'next/image';
import styles from './onboard.module.css';

export default function OnboardPage() {
  return (
    <div className={styles.page}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="videos/onboard_vid.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        <Image
          src="/logos/linko_primarylogo.svg"
          alt="Linko logo"
          width={260}
          height={80}
          className={styles.logo}
        />
        <div className={styles.buttonGroup}>
          <button className={styles.googleButton}>
            <img src="/icons/google.svg" alt="Google" className={styles.googleIcon} />
            Log in with Google
          </button>
          <button className={styles.loginButton}>Log in</button>
          <button className={styles.signupButton}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
