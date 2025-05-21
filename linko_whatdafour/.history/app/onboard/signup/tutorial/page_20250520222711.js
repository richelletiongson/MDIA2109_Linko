"use client"

import React, { useEffect } from 'react';
import Header from '@/app/.components/Header/header';
import { useRouter } from 'next/navigation';
import styles from '@/app/onboard/signup/load/load.module.css';

export default function TutorialPage() {
  const router = useRouter();


  return (
    <div className={styles.page}>
      <Header />
      

    </div>
  );
} 