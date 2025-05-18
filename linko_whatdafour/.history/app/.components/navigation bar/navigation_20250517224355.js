import React, { useState } from 'react';
import styles from './navigation.module.css';

export default function NavigationBar() {
  const [active, setActive] = useState('home');

  return (
    <div className={styles.navBarWrapper}>
      <nav className={styles.bottomNav}>
        <button
          className={`${styles.navBtn} ${active === 'home' ? styles.active : ''}`}
          onClick={() => setActive('home')}
        >
          <span className={styles.icon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/>
              <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
              <circle cx="16" cy="16" r="2" fill="currentColor"/>
            </svg>
          </span>
          <div>Home</div>
        </button>
        <button
          className={`${styles.navBtn} ${active === 'chat' ? styles.active : ''}`}
          onClick={() => setActive('chat')}
        >
          <span className={styles.icon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/>
              <rect x="10" y="14" width="12" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="16" cy="17" r="1" fill="currentColor"/>
            </svg>
          </span>
          <div>Chat</div>
        </button>
        <button
          className={`${styles.navBtn} ${active === 'explore' ? styles.active : ''}`}
          onClick={() => setActive('explore')}
        >
          <span className={styles.icon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 8 L24 24 L8 24 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </span>
          <div>Explore</div>
        </button>
        <button
          className={`${styles.navBtn} ${active === 'profile' ? styles.active : ''}`}
          onClick={() => setActive('profile')}
        >
          <span className={styles.icon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
              <rect x="8" y="20" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </span>
          <div>Profile</div>
        </button>
      </nav>
    </div>
  );
}
