"use client"

import React from 'react';
import Image from 'next/image';
import Header from '@/app/.components/header/header';
import InputField from '@/app/.components/input_field/input_field'
import { useRouter } from 'next/navigation';
import styles from './signup.module.css';
import Button from '@/app/.components/buttons';

export default function SignupPage() {
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
      <form className={styles.form}>
        <label className={styles.label}>What's your preferred username?</label>
        <InputField
          placeholder = ""
          size = "large"
          color = "purple2"
        />

        <label className={styles.label}>When is your birthday?</label>
        <InputField
          placeholder = "(MM/DD/YYYY)"
          size = "large"
          color = "purple2"
        />

        <label className={styles.label}>What are your pronouns?</label>
        <InputField
          placeholder = "(e.g., he/him, she/her, other)"
          size = "large"
          color = "purple2"
        />

        <label className={styles.label}>Which province do you live in?</label>
        <InputField
          placeholder = ""
          size = "large"
          color = "purple2"
        />
      </form>

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