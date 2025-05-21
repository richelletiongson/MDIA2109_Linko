"use client"

import React from 'react';
import Header from '@/app/.components/Header/header';
import { useRouter } from 'next/navigation';
import styles from '@/app/onboard/signup/load/load.module.css';

export default function LoadingPage() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <Header />
      <h2 className={styles.welcome}>Welcome! Let's get started!</h2>
      <div className={styles.profileIconWrapper}>
        <div className={styles.profileIconCircle}>
          <Image src="/icons/profile_placeholder.svg" alt="Profile icon" width={80} height={80} />
          <button className={styles.addPhotoBtn}>+</button>
        </div>
      </div>
      

      <div className={styles.signup_Button}>
        <Button
          buttonText="Next" 
          type="pink" 
          size="small" 
          onClick={() => router.push("/onboard/signup/questionaire/questionaire01")}
        />
        </div>
    </div>
  );
} 