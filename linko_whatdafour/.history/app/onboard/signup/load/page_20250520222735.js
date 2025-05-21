"use client"

import React, { useEffect } from 'react';
import Header from '@/app/.components/Header/header';
import { useRouter } from 'next/navigation';
import styles from '@/app/onboard/signup/load/load.module.css';

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/onboard/signup/tutorial');
    }, 10000); // 10 seconds
  }, [router]);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.loader}>
        <img src="/photos/loading.gif" alt="loading" className={styles.loading}/>
      </div>
      <img src="/photos/LOADING.png" alt="logo" className={styles.logo} />
    </div>
  );
} 