import React from 'react';
import Image from 'next/image';
import Header from '@/app/.components/header/header';
import InputField from '@/app/.components/input_field/input_field'
import styles from './signup.module.css';

export default function SignupPage() {
  return (
    <div className={styles.signupPage}>
      <Header />
      <h2 className={styles.welcome}>Welcome! Let's get started!</h2>
      <div className={styles.profileIconWrapper}>
        <div className={styles.profileIconCircle}>
          <Image src="/icons/profile_placeholder.svg" alt="Profile icon" width={80} height={80} />
          <button className={styles.addPhotoBtn}>+</button>
        </div>
      </div>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="username">What's your preferred username?</label>
        <InputField
          placeholder = "Name..."
          size = "large"
          color = "purple2"
        />

        <label className={styles.label} htmlFor="birthday">When is your birthday?</label>
        <InputField
          placeholder = "(MM/DD/YYYY)"
          size = "large"
          color = "purple2"
        />

        <label className={styles.label} htmlFor="pronouns">What are your pronouns?</label>
        <input className={styles.input} id="pronouns" name="pronouns" type="text" placeholder="(e.g., he/him, she/her, other)" />

        <label className={styles.label} htmlFor="province">Which province do you live in?</label>
        <input className={styles.input} id="province" name="province" type="text" placeholder="" />

        <button className={styles.nextButton} type="submit">Next</button>
      </form>
    </div>
  );
} 