import React, { useState } from 'react';
import styles from './navigation.module.css';
import Button from '../buttons';

export default function NavigationBar() {
  const [active, setActive] = useState('home');

  return (
    <div className={styles.navBarWrapper}>
      <nav className={styles.bottomNav}>
        <Button
          buttonText={<><span className={`${styles.icon} ${active === 'home' ? styles.active : ''}`}><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="16" r="2" fill="currentColor"/></svg></span><div>Home</div></>}
          onClick={() => setActive('home')}
          type={active === 'home' ? 'light_purple' : 'white'}
          size="smaller"
        />
        <Button
          buttonText={<><span className={`${styles.icon} ${active === 'chat' ? styles.active : ''}`}><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/><rect x="10" y="14" width="12" height="6" rx="2" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="17" r="1" fill="currentColor"/></svg></span><div>Chat</div></>}
          onClick={() => setActive('chat')}
          type={active === 'chat' ? 'light_purple' : 'white'}
          size="smaller"
        />
        <Button
          buttonText={<><span className={`${styles.icon} ${active === 'explore' ? styles.active : ''}`}><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/><path d="M16 8 L24 24 L8 24 Z" stroke="currentColor" strokeWidth="2" fill="none"/></svg></span><div>Explore</div></>}
          onClick={() => setActive('explore')}
          type={active === 'explore' ? 'light_purple' : 'white'}
          size="smaller"
        />
        <Button
          buttonText={<><span className={`${styles.icon} ${active === 'profile' ? styles.active : ''}`}><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="2"/><rect x="8" y="20" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="2"/></svg></span><div>Profile</div></>}
          onClick={() => setActive('profile')}
          type={active === 'profile' ? 'light_purple' : 'white'}
          size="smaller"
        />
      </nav>
    </div>
  );
}
