import React from 'react';
import Image from 'next/image';
import styles from './onboard.module.css';

export default function OnboardPage() {
  return (
    <div style={{ position: 'relative', width: 400, height: '100vh', overflow: 'hidden' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 1,
        }}
      >
        <source src="/videos/onboard_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'relative', zIndex: 2, color: '#fff' }}>
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
