"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/app/.components/header/header';
import InputField from '@/app/.components/input_field/input_field'
import { useRouter } from 'next/navigation';
import styles from '../questionaire.module.css';
import Button from '@/app/.components/buttons';
import ProgressBar from '@/app/.components/progress bar/progress';

const LANGUAGES = [
  "English", "Mandarin Chinese", "Cantonese", "Japanese", "French",
  "German", "Spanish", "Korean", "Arabic", "Portuguese", "Russian"
];

export default function Questionaire01Page() {
    const router = useRouter();
    const [selected, setSelected] = useState([]);
    const [showOnProfile, setShowOnProfile] = useState(false);

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
            <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
                <ProgressBar stage={1} />
            </div>
            {/* Question */}
            <h2 className={styles.question}>
                What languages do you speak?<br />
                <span className={styles.subQuestion}>( Select all that apply )</span>
            </h2>
            {/* Toggle */}
            <div className={styles.toggleRow}>
                <div
                    className={`${styles.toggleSwitch} ${showOnProfile ? styles.toggleOn : ''}`}
                    onClick={() => setShowOnProfile(v => !v)}
                >
                    <div className={styles.toggleKnob}></div>
                </div>
                <span className={styles.toggleLabel}>Show on profile</span>
            </div>
            {/* Language Pills */}
            <div className={styles.languageGrid}>
                {LANGUAGES.map(lang => (
                    <button
                        key={lang}
                        className={`${styles.languagePill} ${selected.includes(lang) ? styles.selected : ''}`}
                        onClick={() => toggleLanguage(lang)}
                        type="button"
                    >
                        {lang}
                    </button>
                ))}
            </div>
            {/* Navigation Buttons */}
            <button className={styles.fabLeft}>
                <span>&lt;</span>
            </button>
            <button className={styles.fabRight}>
                <span>&gt;</span>
            </button>
        </div>
    );
} 