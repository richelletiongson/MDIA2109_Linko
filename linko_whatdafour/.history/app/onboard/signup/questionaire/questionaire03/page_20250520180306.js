"use client"

import React, { useState } from 'react';
import Header from '@/app/.components/Header/header';
import { useRouter } from 'next/navigation';
import styles from '../questionaire.module.css';
import Button from '@/app/.components/buttons';
import ProgressBar from '@/app/.components/progress bar/progress';
import QuestionaireFooter from '@/app/.components/Questionaire Footer/footer';

const MBTI = [
  "ESTP", "ESFP", "ISTP", "ISFP", "ESTJ", "ESFP", "ISTJ", "ISFJ", "ENTJ", "ENTP", "INTJ", "INTP", "ENFJ", "ENFP", "INFJ", "INFP", "I don't know"
];

export default function Questionaire03Page() {
    const router = useRouter();
    const [selected, setSelected] = useState([]);

    const toggleMbti = (mbti) => {
        setSelected(selected =>
            selected.includes(mbti)
                ? selected.filter(g => g !== mbti)
                : [...selected, mbti]
        );
    };

    return (
        <div className={styles.page}>
            <Header />
            {/* Progress Bar */}
            <div className={styles.progressBarWrapper}>
                <ProgressBar stage={1} />
            </div>
            {/* Question */}
            <h2 className={styles.question}>
                What's your MBTI?<br />
                <span className={styles.subQuestion}>( Select all that apply )</span>
            </h2>
            <div className={styles.languageGridWrapper}>
            <div className={styles.languageGrid}>
                {MBTI.map(mbti => (
                    <Button
                        key={mbti}
                        buttonText={mbti}
                        type={selected.includes(mbti) ? 'green' : 'white'}
                        size="big_pill"
                        onClick={() => toggleGender(mbti)}
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
                        onClick={() => router.push("/onboard/signup/questionaire/questionaire01")}
                    />
                }
                rightButton={
                    <Button
                        buttonText={<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.42871 1.57153L11.643 11.0001L2.42871 20.4287" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>}
                        type="pink"
                        size="big_round"
                        onClick={() => router.push("/onboard/signup/questionaire/questionaire03")}
                    />
                }
            />
        </div>
    );
} 