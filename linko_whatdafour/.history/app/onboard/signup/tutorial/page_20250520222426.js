"use client"

import React from 'react';
import Header from '@/app/.components/Header/header';
import styles from '@/app/onboard/signup/load/load.module.css';

export default function TutorialPage() {
  return (
    <div className={styles.page}>
      <Header />
      {/* Add your tutorial content here */}
      <div style={{ color: '#fff', textAlign: 'center', marginTop: '40px' }}>
        <h2>Welcome to the Tutorial!</h2>
        <p>Here's how to use Linko...</p>
      </div>
    </div>
  );
} 