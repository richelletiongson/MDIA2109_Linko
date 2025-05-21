"use client"

import React from 'react';
import Header from '@/app/.components/Header/header';
import { useRouter } from 'next/navigation';
import styles from '@/app/onboard/signup/tutorial/tutorial.module.css';
import QuestionaireFooter from '@/app/.components/Questionaire Footer/footer';

export default function TutorialPage() {
  const router = useRouter();


  return (
    <div className={styles.page}>
        <Header />
        <div className={styles.tutorialContent}>
            <div className={styles.videoContainer}>
                <video src="/videos/matchingtutorial.mp4" autoPlay muted loop />
            </div>
            <div className={styles.tutorialText}>
                <h2>Swipe to find your "concert pal"!</h2>
                <h2>A place for all music lovers.</h2>
            </div>
        </div>

        <QuestionaireFooter 
        centerButton={
            <Button
                buttonText="SKIP"
                type="transparent_pinkborder"
                border="pink_border"
                size="big_pill"
                onClick={() => router.push("/homepage/matched")}
            />
        }
        />
    </div>
  );
} 