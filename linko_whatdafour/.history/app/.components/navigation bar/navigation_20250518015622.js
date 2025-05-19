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
          buttonText={<><span className={"icon"}>
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 14.5C1 16.2728 1.34919 18.0283 2.02763 19.6662C2.70606 21.3041 3.70047 22.7923 4.95406 24.0459C6.20765 25.2995 7.69588 26.2939 9.33377 26.9724C10.9717 27.6508 12.7272 28 14.5 28C16.2728 28 18.0283 27.6508 19.6662 26.9724C21.3041 26.2939 22.7923 25.2995 24.0459 24.0459C25.2995 22.7923 26.2939 21.3041 26.9724 19.6662C27.6508 18.0283 28 16.2728 28 14.5C28 12.7272 27.6508 10.9717 26.9724 9.33377C26.2939 7.69588 25.2995 6.20765 24.0459 4.95406C22.7923 3.70047 21.3041 2.70607 19.6662 2.02763C18.0283 1.34919 16.2728 1 14.5 1C12.7272 1 10.9717 1.34919 9.33377 2.02763C7.69588 2.70607 6.20765 3.70047 4.95406 4.95406C3.70047 6.20765 2.70606 7.69588 2.02763 9.33377C1.34919 10.9717 1 12.7272 1 14.5Z" stroke="#FFFEFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0801 10.0806C11.2522 8.90848 12.8419 8.25 14.4995 8.25C15.1899 8.25 15.7495 7.69036 15.7495 7C15.7495 6.30964 15.1899 5.75 14.4995 5.75C12.1789 5.75 9.95327 6.67187 8.31233 8.31282C6.67138 9.95376 5.74951 12.1794 5.74951 14.5C5.74951 15.1904 6.30916 15.75 6.99951 15.75C7.68987 15.75 8.24951 15.1904 8.24951 14.5C8.24951 12.8424 8.90799 11.2527 10.0801 10.0806ZM14.4995 11.75C13.7702 11.75 13.0707 12.0397 12.555 12.5555C12.0392 13.0712 11.7495 13.7707 11.7495 14.5C11.7495 15.2293 12.0392 15.9288 12.555 16.4445C13.0707 16.9603 13.7702 17.25 14.4995 17.25C15.2289 17.25 15.9283 16.9603 16.4441 16.4445C16.9598 15.9288 17.2495 15.2293 17.2495 14.5C17.2495 13.7707 16.9598 13.0712 16.4441 12.5555C15.9283 12.0397 15.2289 11.75 14.4995 11.75ZM23.2495 14.5C23.2495 13.8096 22.6899 13.25 21.9995 13.25C21.3092 13.25 20.7495 13.8096 20.7495 14.5C20.7495 16.1576 20.091 17.7473 18.9189 18.9194C17.7468 20.0915 16.1571 20.75 14.4995 20.75C13.8092 20.75 13.2495 21.3096 13.2495 22C13.2495 22.6904 13.8092 23.25 14.4995 23.25C16.8202 23.25 19.0458 22.3281 20.6867 20.6872C22.3276 19.0462 23.2495 16.8206 23.2495 14.5ZM14.4997 15.8064C15.2213 15.8064 15.8062 15.2215 15.8062 14.5C15.8062 13.7784 15.2213 13.1935 14.4997 13.1935C13.7782 13.1935 13.1933 13.7784 13.1933 14.5C13.1933 15.2215 13.7782 15.8064 14.4997 15.8064Z" fill="#FFFEFC"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5001 19.2432C17.1197 19.2432 19.2433 17.1196 19.2433 14.5C19.2433 11.8803 17.1197 9.75671 14.5001 9.75671C11.8805 9.75671 9.75684 11.8803 9.75684 14.5C9.75684 17.1196 11.8805 19.2432 14.5001 19.2432ZM14.5001 15.2905C14.9367 15.2905 15.2906 14.9366 15.2906 14.4999C15.2906 14.0633 14.9367 13.7094 14.5001 13.7094C14.0635 13.7094 13.7096 14.0633 13.7096 14.4999C13.7096 14.9366 14.0635 15.2905 14.5001 15.2905Z" fill="#FFFEFC"/>
            </svg>
          </span><div className={"label"}>Home</div></>}
          onClick={() => handleNav('home', '/homepage')}
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
