"use client"

import React, { useState } from 'react';
import Header from '@/app/.components/header/header';
import { useRouter } from 'next/navigation';
import styles from '../questionaire.module.css';
import Button from '@/app/.components/buttons';
import ProgressBar from '@/app/.components/progress bar/progress';
import QuestionaireFooter from '@/app/.components/Questionaire Footer/footer';

const LANGUAGES = [
  "English", "Mandarin Chinese", "Cantonese", "Japanese", "French",
  "German", "Spanish", "Korean", "Arabic", "Portuguese", "Russian"
];

export default function Questionaire01Page() {
    const router = useRouter();
    const [selected, setSelected] = useState([]);

    const toggleLanguage = (lang) => {
        setSelected(selected =>
            selected.includes(lang)
                ? selected.filter(l => l !== lang)
                : [...selected, lang]
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
                What languages do you speak?<br />
                <span className={styles.subQuestion}>( Select all that apply )</span>
            </h2>
            <div className={styles.languageGridWrapper}>
            <div className={styles.languageGrid}>
                {LANGUAGES.map(lang => (
                    <Button
                        key={lang}
                        buttonText={lang}
                        type={selected.includes(lang) ? 'green' : 'white'}
                        size="big_pill"
                        onClick={() => toggleLanguage(lang)}
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
                    />
                }
                centerButton={
                    <Button
                        buttonText="SKIP"
                        type="transparent_pinkborder"
                        border="pink_border"
                        size="big_pill"
                    />
                }
                rightButton={
                    <Button
                        buttonText={<span style={{ fontSize: '2rem' }}>&gt;</span>}
                        type="pink"
                        size="big_round"
                    />
                }
            />
        </div>
    );
} 