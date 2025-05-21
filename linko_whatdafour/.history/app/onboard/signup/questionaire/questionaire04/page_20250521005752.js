"use client"

import React, { useState } from 'react';
import Header from '@/app/.components/Header/header';
import { useRouter } from 'next/navigation';
import styles from '../questionaire.module.css';
import Button from '@/app/.components/buttons';
import ProgressBar from '@/app/.components/progress bar/progress';
import QuestionaireFooter from '@/app/.components/Questionaire Footer/footer';
import InputField from '@/app/.components/input_field/input_field';
import { WarningMessage } from '@/app/.components/Modal/modal';

export default function Questionaire04Page() {
    const router = useRouter();
    const [selected, setSelected] = useState([]);
    const [note, setNote] = useState("");
    const [showError, setShowError] = useState(false);

    const handleRightButtonClick = () => {
        if (!note.trim()) {
            setShowError(true);
        } else {
            router.push("/onboard/signup/questionaire/questionaire05");
        }
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
                Share your love for music!<br />
                <span className={styles.subQuestion}>( Write a short note for everyone to see )</span>
            </h2>
            <div className={styles.languageGridWrapper}>
                <textarea
                    className={styles.textArea}
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    placeholder={"You can share your concert plan, favorite artist, even your go-to song for a road trip, or anything else music-related!"}
                />
            </div>
            <QuestionaireFooter
                leftButton={
                    <Button
                        buttonText={<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5715 1.57153L2.35725 11.0001L11.5715 20.4287" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>}
                        type="pink"
                        size="big_round"
                        onClick={() => router.push("/onboard/signup/questionaire/questionaire03")}
                    />
                }
                rightButton={
                    <Button
                        buttonText={<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.42871 1.57153L11.643 11.0001L2.42871 20.4287" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>}
                        type="pink"
                        size="big_round"
                        onClick={handleRightButtonClick}
                    />
                }
            />
            <WarningMessage
                isOpen={showError}
                onClose={() => setShowError(false)}
                message="Please write an answer to continue!"
                type="error"
                size="small"
            />
        </div>
    );
} 