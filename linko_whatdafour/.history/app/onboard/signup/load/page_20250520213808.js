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
    
    </div>
  );
} 