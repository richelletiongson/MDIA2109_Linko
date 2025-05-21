"use client"

import React from 'react';
import Header from '@/app/.components/Header/header';
import { useRouter } from 'next/navigation';
import styles from '@/app/onboard/signup/tutorial/tutorial.module.css';
import QuestionaireFooter from '@/app/.components/Questionaire Footer/footer';
import Button from '@/app/.components/buttons';

export default function TutorialPage() {
  const router = useRouter();


  return (
    <div className={styles.page}>
        <Header />
        <div className={styles.tutorialContent}>
            <div className={styles.videoContainer}>
                <video 
                src="/videos/matchingtutorial.mp4" 
                autoPlay muted loop 
                className={styles.video}
                />
            </div>
            <div className={styles.tutorialTextContainer}>
                <h2 className={styles.tutorialText}>Swipe to find your "concert pal"!</h2>
                <h2 className={styles.tutorialText}>A place for all music lovers.</h2>
            </div>
        </div>

        <QuestionaireFooter 
        centerButton={
            <Button
                buttonText="SKIP"
                type="transparent_pinkborder"
                border="pink_border"
                size="big_pill"
                onClick={() => router.push("/homepage")}
            />
        }
        />
    </div>
  );
} 