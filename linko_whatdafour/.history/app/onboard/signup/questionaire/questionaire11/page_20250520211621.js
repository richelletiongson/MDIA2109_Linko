"use client"

import React, { useState } from 'react';
import Header from '@/app/.components/Header/header';
import { useRouter } from 'next/navigation';
import styles from '../questionaire.module.css';
import Button from '@/app/.components/buttons';
import ProgressBar from '@/app/.components/progress bar/progress';
import QuestionaireFooter from '@/app/.components/Questionaire Footer/footer';
import { GetStartedModal } from '@/app/.components/Modal/modal';

const HOBBIES = [
  "Traveling", "Sports", "Cooking", "Reading", "Photography", "Dancing", "Gaming", "Art", "Volunteering", "Other"
];

export default function Questionaire11Page() {
    const router = useRouter();
    const [selected, setSelected] = useState([]);
    const [note, setNote] = useState("");
    const [showGetStarted, setShowGetStarted] = useState(false);

    const toggleHobby = (hobby) => {
        setSelected(selected =>
            selected.includes(hobby)
                ? selected.filter(h => h !== hobby)
                : [...selected, hobby]
        );
    };

    const handleCloseGetStarted = () => {
        setShowGetStarted(false);
        router.push('/onboard/signup/loading');
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
                What are your interests or hobbies?<br />
                <span className={styles.subQuestion}>( Select all that apply )</span>
            </h2>
            <div className={styles.languageGridWrapper}>
            <div className={styles.languageGrid}>
                {HOBBIES.map(hobby => (
                    <Button
                        key={hobby}
                        buttonText={hobby}
                        type={selected.includes(hobby) ? 'green' : 'white'}
                        size="big_pill"
                        onClick={() => toggleHobby(hobby)}
                        className={styles.languagePill}
                    />
                ))}
                <textarea
                    className={styles.textArea}
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    placeholder={"Anything else? Let us know"}
                />
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
                        onClick={() => router.push("/onboard/signup/questionaire/questionaire10")}
                    />
                }
                centerButton={
                    <Button
                        buttonText="SKIP"
                        type="transparent_pinkborder"
                        border="pink_border"
                        size="big_pill"
                        onClick={() => setShowGetStarted(true)}
                    />
                }
                rightButton={
                    <Button
                        buttonText={<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.42871 1.57153L11.643 11.0001L2.42871 20.4287" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>}
                        type="pink"
                        size="big_round"
                        onClick={() => setShowGetStarted(true)}
                    />
                }
            />
            {showGetStarted && (
                <GetStartedModal
                    isOpen={showGetStarted}
                    onClose={handleCloseGetStarted}
                    size="small"
                >
                    <div style={{textAlign: 'center'}}>
                        <h2>Welcome to Linko!</h2>
                        <p>Your onboarding is complete. Get started now!</p>
                        <Button 
                        buttonText="Start my journey" 
                        type="pink" 
                        size="small" 
                        onClick={handleCloseGetStarted} />
                    </div>
                </GetStartedModal>
            )}
        </div>
    );
}