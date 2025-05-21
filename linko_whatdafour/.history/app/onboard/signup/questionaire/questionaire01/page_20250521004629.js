"use client"

import React, { useState } from 'react';
import Header from '@/app/.components/Header/header';
import { useRouter } from 'next/navigation';
import styles from '../questionaire.module.css';
import Button from '@/app/.components/buttons';
import ProgressBar from '@/app/.components/progress bar/progress';
import QuestionaireFooter from '@/app/.components/Questionaire Footer/footer';
import { WarningMessage } from '@/app/.components/Modal/modal';
import ReactDOM from 'react-dom';

const LANGUAGES = [
  "English", "Mandarin Chinese", "Cantonese", "Japanese", "French",
  "German", "Spanish", "Korean", "Arabic", "Portuguese", "Russian"
];

// BottomErrorModal: modal at bottom center, closes on overlay click
function BottomErrorModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div
            style={{
                position: 'fixed',
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
                background: 'rgba(0,0,0,0.0)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                zIndex: 3000,
            }}
            onClick={onClose}
        >
            <div
                style={{
                    background: '#fff',
                    borderRadius: '24px 24px 0 0',
                    width: '350px',
                    maxWidth: '90vw',
                    margin: '0 0 32px 0',
                    boxShadow: '0 -4px 32px #0008',
                    padding: '32px 20px 24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body
    );
}

export default function Questionaire01Page() {
    const router = useRouter();
    const [selected, setSelected] = useState([]);
    const [showError, setShowError] = useState(false);

    const toggleLanguage = (lang) => {
        setSelected(selected =>
            selected.includes(lang)
                ? selected.filter(l => l !== lang)
                : [...selected, lang]
        );
    };

    const handleRightButtonClick = () => {
        if (selected.length === 0) {
            setShowError(true);
        } else {
            router.push("/onboard/signup/questionaire/questionaire02");
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
                        buttonText= {<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5715 1.57153L2.35725 11.0001L11.5715 20.4287" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>}
                        type="pink"
                        size="big_round"
                        onClick={() => router.push("/onboard/signup")}
                    />
                }
                rightButton={
                    <Button
                        buttonText= {<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.42871 1.57153L11.643 11.0001L2.42871 20.4287" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>}
                        type="pink"
                        size="big_round"
                        onClick={handleRightButtonClick}
                    />
                }
            />
            <BottomErrorModal isOpen={showError} onClose={() => setShowError(false)}>
                <WarningMessage
                    message="Please write an answer to continue!"
                    type="error"
                    size="small"
                />
            </BottomErrorModal>
        </div>
    );
} 