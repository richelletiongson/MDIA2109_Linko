"use client"

import React, { useState } from 'react';
import Header from '@/app/.components/header/header';
import { useRouter } from 'next/navigation';
import styles from '../questionaire.module.css';
import Button from '@/app/.components/buttons';
import ProgressBar from '@/app/.components/progress bar/progress';
import QuestionaireFooter from '@/app/.components/Questionaire Footer/footer';

const GENDERS = [
  "Male", "Female", "Non-binary", "No preference"
];

export default function Questionaire01Page() {
    const router = useRouter();
    const [selected, setSelected] = useState([]);

    const toggleGender = (gender) => {
        setSelected(selected =>
            selected.includes(gender)
                ? selected.filter(g => g !== gender)
                : [...selected, gender]
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
                What is your gender?<br />
                <span className={styles.subQuestion}>( Select all that apply )</span>
            </h2>
            <div className={styles.languageGridWrapper}>
            <div className={styles.languageGrid}>
                {GENDERS.map(gender => (
                    <Button
                        key={gender}
                        buttonText={gender}
                        type={selected.includes(gender) ? 'green' : 'white'}
                        size="big_pill"
                        onClick={() => toggleGender(gender)}
                        className={styles.languagePill}
                    />
                ))}
            </div>
            </div>
            <QuestionaireFooter
                leftButton={
                    <Button
                        buttonText={<span style={{ fontSize: '2rem' }}>&lt;</span>}
                        type="pink"
                        size="big_round"
                        onClick={() => router.push("/onboard/signup/questionaire/questionaire01")}
                    />
                }
                rightButton={
                    <Button
                        buttonText={<span style={{ fontSize: '2rem' }}>&gt;</span>}
                        type="pink"
                        size="big_round"
                        onClick={() => router.push("/onboard/signup/questionaire/questionaire03")}
                    />
                }
            />
        </div>
    );
} 