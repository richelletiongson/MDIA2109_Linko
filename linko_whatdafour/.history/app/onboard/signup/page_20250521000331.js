"use client"

import React, { useState } from 'react';
import Header from '@/app/.components/Header/header';
import InputField from '@/app/.components/input_field/input_field'
import { useRouter } from 'next/navigation';
import styles from './signup.module.css';
import Button from '@/app/.components/buttons';
import { PhotoGalleryModal } from '@/app/.components/Modal/modal';

export default function SignupPage() {
  const router = useRouter();

  const [profilePic, setProfilePic] = useState('/photos/DefaultProfile.png');
  const [profilePicModalOpen, setProfilePicModalOpen] = useState(false);
  const [profilePicSelection, setProfilePicSelection] = useState([profilePic]);

  const placeholderPhotos = [
    '/photos/photo_gallery/photo1.JPG',
    '/photos/photo_gallery/photo2.JPG',
    '/photos/photo_gallery/photo3.JPG',
    '/photos/photo_gallery/photo4.jpeg',
    '/photos/photo_gallery/photo5.jpeg',
    '/photos/photo_gallery/photo6.jpeg',
    '/photos/photo_gallery/photo7.jpeg',
    '/photos/photo_gallery/photo8.jpeg',
    '/photos/photo_gallery/photo9.jpeg',
    '/photos/photo_gallery/photo10.jpg',
  ];

  const handleOpenProfilePicModal = () => {
    setProfilePicSelection([profilePic]);
    setProfilePicModalOpen(true);
  };
  const handleCloseProfilePicModal = () => setProfilePicModalOpen(false);
  const handleDoneProfilePicModal = () => {
    if (profilePicSelection.length > 0) setProfilePic(profilePicSelection[0]);
    setProfilePicModalOpen(false);
  };

  return (
    <div className={styles.page}>
      <Header />
      <h2 className={styles.welcome}>Welcome! Let's get started!</h2>
      <div className={styles.profileIconWrapper}>
        <div className={styles.profileIconCircle}>
          <img
            src={profilePic}
            alt="Profile icon"
          />
          <button onClick={handleOpenProfilePicModal}>Edit</button>
        </div>
      </div>
      <PhotoGalleryModal
        isOpen={profilePicModalOpen}
        onClose={handleCloseProfilePicModal}
        onDone={handleDoneProfilePicModal}
        availablePhotos={placeholderPhotos}
        selectedPhotos={profilePicSelection}
        setSelectedPhotos={(photosOrUpdater) => {
          if (typeof photosOrUpdater === 'function') {
            setProfilePicSelection(prev => {
              const result = photosOrUpdater(prev);
              if (result.length > 1) return [result[result.length - 1]];
              return result;
            });
          } else if (Array.isArray(photosOrUpdater)) {
            setProfilePicSelection(photosOrUpdater.length > 0 ? [photosOrUpdater[photosOrUpdater.length - 1]] : []);
          }
        }}
      />
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