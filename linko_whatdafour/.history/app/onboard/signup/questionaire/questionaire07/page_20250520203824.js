"use client"

import React, { useState } from 'react';
import Header from '@/app/.components/Header/header';
import { useRouter } from 'next/navigation';
import styles from '../questionaire.module.css';
import Button from '@/app/.components/buttons';
import ProgressBar from '@/app/.components/progress bar/progress';
import QuestionaireFooter from '@/app/.components/Questionaire Footer/footer';

const EVENTS = [
  "Live concerts", "Music festivals", "Open mic", "Club nights", "Karaoke", "DJ sets", "Battle of the Bands", "Classical recitals", "Workshops"
];

export default function Questionaire07Page() {
    const router = useRouter();
    const [selected, setSelected] = useState([]);
    const [note, setNote] = useState("");

    const toggleEvent = (event) => {
        setSelected(selected =>
            selected.includes(event)
                ? selected.filter(e => e !== event)
                : [...selected, event]
        );
    };

    return (
        <div className={styles.page}>
            <Header />
            {/* Progress Bar */}
            <div className={styles.progressBarWrapper}>
                <ProgressBar stage={2} />
            </div>
            {/* Question */}
            <h2 className={styles.question}>
                Which types of music events do you enjoy the most<br />
                <span className={styles.subQuestion}>( Select all that apply )</span>
            </h2>
            <div className={styles.languageGridWrapper}>
            <div className={styles.languageGrid}>
                {EVENTS.map(event => (
                    <Button
                        key={event}
                        buttonText={event}
                        type={selected.includes(event) ? 'green' : 'white'}
                        size="big_pill"
                        onClick={() => toggleEvent(event)}
                        className={styles.languagePill}
                    />
                ))}
                <textarea
                    className={styles.textArea}
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    placeholder={"Besides the options above, are there any other music events you enjoy?"}
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
                        onClick={() => router.push("/onboard/signup/questionaire/questionaire05")}
                    />
                }
                centerButton={
                    <Button
                        buttonText="SKIP"
                        type="transparent_pinkborder"
                        border="pink_border"
                        size="big_pill"
                        onClick={() => router.push("/onboard/signup/questionaire/questionaire07")}
                    />
                }
                rightButton={
                    <Button
                        buttonText={<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.42871 1.57153L11.643 11.0001L2.42871 20.4287" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>}
                        type="pink"
                        size="big_round"
                        onClick={() => router.push("/onboard/signup/questionaire/questionaire07")}
                    />
                }
            />
        </div>
    );
}