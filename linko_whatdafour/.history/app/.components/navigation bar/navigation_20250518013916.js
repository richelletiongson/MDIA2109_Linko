import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './navigation.module.css';
import Button from '../buttons';

export default function NavigationBar() {
  const [active, setActive] = useState('home');
  const router = useRouter();

  const handleNav = (key, path) => {
    setActive(key);
    router.push(path);
  };

  return (
    <div className={styles.navBarWrapper}>
      <nav className={styles.bottomNav}>
        <Button
          buttonText={<><span className={"icon"}><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="16" r="2" fill="currentColor"/></svg></span><div>Home</div></>}
          onClick={() => handleNav('home', '/')}
          type={active === 'home' ? 'nav_active' : 'nav'}
          className={styles.navBtn}
        />
        <Button
          buttonText={<><span className={"icon"}><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/><path d="M10 22V14C10 12.8954 10.8954 12 12 12H20C21.1046 12 22 12.8954 22 14V22" stroke="currentColor" strokeWidth="2"/><path d="M10 22L16 18L22 22" stroke="currentColor" strokeWidth="2"/></svg></span><div>Chat</div></>}
          onClick={() => handleNav('chat', '/chat')}
          type={active === 'chat' ? 'nav_active' : 'nav'}
          className={styles.navBtn}
        />
        <Button
          buttonText={<><span className={"icon"}><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/><path d="M20 12L12 20" stroke="currentColor" strokeWidth="2"/><circle cx="20" cy="12" r="2" fill="currentColor"/></svg></span><div>Explore</div></>}
          onClick={() => handleNav('explore', '/explore')}
          type={active === 'explore' ? 'nav_active' : 'nav'}
          className={styles.navBtn}
        />
        <Button
          buttonText={<><span className={"icon"}><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="2"/><rect x="8" y="20" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="2"/></svg></span><div>Profile</div></>}
          onClick={() => handleNav('profile', '/profile')}
          type={active === 'profile' ? 'nav_active' : 'nav'}
          className={styles.navBtn}
        />
      </nav>
    </div>
  );
}
