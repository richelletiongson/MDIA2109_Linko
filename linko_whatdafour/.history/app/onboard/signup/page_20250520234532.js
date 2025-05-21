"use client"

import React from 'react';
import Image from 'next/image';
import Header from '@/app/.components/Header/header';
import InputField from '@/app/.components/input_field/input_field'
import { useRouter } from 'next/navigation';
import styles from './signup.module.css';
import Button from '@/app/.components/buttons';
import { PhotoGalleryModal } from '@/app/.components/Modal/modal';

export default function SignupPage() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <Header />
      <h2 className={styles.welcome}>Welcome! Let's get started!</h2>
      <div className={styles.profileIconWrapper}>
        <div className={styles.profileIconCircle}>
          <Image src="/photos/DefaultProfile.png" alt="Profile icon" width={80} height={80} />
          <div className={styles.addPhotoBtn}>
          <Button
            buttonText={<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group">
                <circle id="Ellipse 74" cx="27.125" cy="27.125" r="27.125" fill="#0B0A17"/>
                <path id="Vector" d="M19.25 19.25H17.5C16.5717 19.25 15.6815 19.6187 15.0251 20.2751C14.3687 20.9315 14 21.8217 14 22.75V38.5C14 39.4283 14.3687 40.3185 15.0251 40.9749C15.6815 41.6313 16.5717 42 17.5 42H33.25C34.1783 42 35.0685 41.6313 35.7249 40.9749C36.3813 40.3185 36.75 39.4283 36.75 38.5V36.75" stroke="#C2FF3E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path id="Vector_2" d="M35 15.7499L40.25 20.9999M42.6737 18.5237C43.363 17.8345 43.7502 16.8997 43.7502 15.9249C43.7502 14.9502 43.363 14.0154 42.6737 13.3262C41.9845 12.637 41.0497 12.2498 40.075 12.2498C39.1003 12.2498 38.1655 12.637 37.4763 13.3262L22.75 27.9999V33.2499H28L42.6737 18.5237Z" stroke="#C2FF3E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>}
            onClick={handleOpenProfilePicModal}
            type="dark_purple"
            size="big_round"
          />
          </div>
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