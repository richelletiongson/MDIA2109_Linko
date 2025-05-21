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
      <div className={styles.loader}>
        <img src="/photos/loading.gif" alt="loading"/>
      </div>
      <img src="/photos/LOADING.png" alt="logo" className={styles.logo} />
    </div>
  );
} 