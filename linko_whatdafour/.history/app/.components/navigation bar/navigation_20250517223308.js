import React from 'react';
import styles from '../../profile/profile.module.css';

export default function NavigationBar() {
  return (
    <div className={styles.navBarWrapper}>
      <nav className={styles.bottomNav}>
        <button className={styles.navBtn}><span role="img" aria-label="Home">🏠</span><div>Home</div></button>
        <button className={styles.navBtn}><span role="img" aria-label="Chat">💬</span><div>Chat</div></button>
        <button className={styles.navBtn}><span role="img" aria-label="Explore">🔍</span><div>Explore</div></button>
        <button className={styles.navBtn}><span role="img" aria-label="Profile">👤</span><div>Profile</div></button>
      </nav>
    </div>
  );
}
