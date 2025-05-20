"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/app/.components/header/header';
import InputField from '@/app/.components/input_field/input_field'
import { useRouter } from 'next/navigation';
import styles from '../questionaire.module.css';
import Button from '@/app/.components/buttons';

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
            <h2 className={styles.welcome}>Welcome! Let's get started!</h2>
            <div className={styles.profileIconWrapper}>
                <div className={styles.profileIconCircle}>
                    <Image src="/icons/profile_placeholder.svg" alt="Profile icon" width={80} height={80} />
                    <button className={styles.addPhotoBtn}>+</button>
                </div>
            </div>
            <form className={styles.form}>
                <label className={styles.label}>What's your preferred username?</label>
                <InputField
                    placeholder=""
                    size="large"
                    color="purple2"
                />

                <label className={styles.label}>When is your birthday?</label>
                <InputField
                    placeholder="(MM/DD/YYYY)"
                    size="large"
                    color="purple2"
                />

                <label className={styles.label}>What are your pronouns?</label>
                <InputField
                    placeholder="(e.g., he/him, she/her, other)"
                    size="large"
                    color="purple2"
                />

                <label className={styles.label}>Which province do you live in?</label>
                <InputField
                    placeholder=""
                    size="large"
                    color="purple2"
                />
            </form>

            <div className={styles.signup_Button}>
                <Button
                    buttonText="Next"
                    type="pink"
                    size="small"
                    onClick={() => router.push("/questionaire/questionaire01")}
                />
            </div>

            {/* Logo and Progress */}
            <div className={styles.logoRow}>
                <Image src="/logos/linko_primarylogo.svg" alt="Linko logo" width={130} height={30} />
            </div>
            {/* Step Indicator */}
            <div className={styles.stepIndicator}>
                <Image src="/icons/profile_step.svg" alt="Step 1" width={48} height={48} />
                <div className={styles.dots}>
                    <span className={styles.activeDot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>
                <div className={styles.progressBar}>
                    <div className={styles.progressActive}></div>
                    <div className={styles.progressInactive}></div>
                    <div className={styles.progressInactive}></div>
                </div>
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