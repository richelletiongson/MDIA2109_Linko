"use client"

import React, { useState } from 'react';
import Header from '@/app/.components/Header/header';
import { useRouter } from 'next/navigation';
import styles from '../questionaire.module.css';
import Button from '@/app/.components/buttons';
import ProgressBar from '@/app/.components/progress bar/progress';
import QuestionaireFooter from '@/app/.components/Questionaire Footer/footer';

const TIME = [
  "Morning person", "Night owl", "Both"
];

export default function Questionaire08Page() {
    const router = useRouter();
    const [selected, setSelected] = useState([]);

    const toggleTime = (time) => {
        setSelected(selected =>
            selected.includes(time)
                ? selected.filter(t => t !== time)
                : [...selected, time]
        );
    };

    return (
        <div className={styles.page}>
            <Header />
            {/* Progress Bar */}
            <div className={styles.progressBarWrapper}>
                <ProgressBar stage={3} />
            </div>
            {/* Question */}
            <h2 className={styles.question}>
                Are you a morning person or a night owl?<br />
                <span className={styles.subQuestion}>( Select all that apply )</span>
            </h2>
            <div className={styles.languageGridWrapper}>
            <div className={styles.languageGrid}>
                {TIME.map(time => (
                    <Button
                        key={time}
                        buttonText={time}
                        type={selected.includes(time) ? 'green' : 'white'}
                        size="big_pill"
                        onClick={() => toggleTime(time)}
                        className={styles.languagePill}
                    />
                ))}
            </div>
            </div>
            <QuestionaireFooter
                leftButton={
                    <Button
                        buttonText={<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5715 1.57153L2.35725 11.0001L11.5715 20.4287" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>}
                        type="pink"
                        size="big_round"
                        onClick={() => router.push("/onboard/signup/questionaire/questionaire07")}
                    />
                }
                centerButton={
                    <Button
                        buttonText="SKIP"
                        type="transparent_pinkborder"
                        border="pink_border"
                        size="big_pill"
                        onClick={() => router.push("/onboard/signup/questionaire/questionaire09")}
                    />
                }
                rightButton={
                    <Button
                        buttonText={<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.42871 1.57153L11.643 11.0001L2.42871 20.4287" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>}
                        type="pink"
                        size="big_round"
                        onClick={() => router.push("/onboard/signup/questionaire/questionaire09")}
                    />
                }
            />
        </div>
    );
}