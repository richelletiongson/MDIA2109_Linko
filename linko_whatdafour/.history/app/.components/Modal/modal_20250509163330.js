"use client";
import React from "react";
import styles from "./modal.module.css";

// Original Modal
export const Modal = ({ message }) => (
    <div className={styles.overlay}>
        <div className={styles.modal}>
            <span className={styles.icon}>❗</span>
            <span className={styles.message}>{message}</span>
        </div>
    </div>
);

// Another Modal with close button and different icon
export const AnotherModal = ({ message, onClose }) => (
    <div className={styles.overlay}>
        <div className={styles.modal}>
            <span className={styles.icon}>🚨</span>
            <span className={styles.message}>{message}</span>
            <button
                className={styles.closeButton}
                onClick={onClose}>
                Close
            </button>
        </div>
    </div>
);