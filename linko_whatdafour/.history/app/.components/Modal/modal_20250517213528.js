import React from 'react';
import classnames from "classnames";
import styles from "./modal.module.css";
import Button from "../buttons";

export const WarningMessage = ({
    message = "Please write an answer to continue !",
    type = "error",
    size = "medium",
}) => {
    const messageClasses = classnames(styles.warningBox, {
        [styles.error]: type === "error",
        [styles.warning]: type === "warning",
        [styles.success]: type === "success",
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
    });

    return (
        <div className={messageClasses}>
            <FiAlertCircle className={styles.icon} />
            <span className={styles.text}>{message}</span>
        </div>
    );
};

export const GetStartedModal = ({
    isOpen = true,
    children,
    size = "medium",
    onClose = null,
    footer = null,
}) => {
    if (!isOpen) return null;

    const modalClasses = classnames(styles.getStartedModal, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
    });

    return (
        <div className={styles.overlay}>
            <div className={modalClasses}>
                <div className={styles.topBar}></div>
                <div className={styles.content}>{children}</div>
                <div className={styles.footer}>{footer}</div>
            </div>
        </div>
    );
};

export const NoteModal = ({
    isOpen,
    onClose,
    title,
    noteDraft,
    setNoteDraft,
    onDone
}) => {
    if (!isOpen) return null;
    return (
        <div className={styles.overlay}>
            <div className={styles.modalBox}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                </div>
                <div className={styles.noteModalContent}>
                    <textarea
                        className={styles.noteModalTextarea}
                        value={noteDraft}
                        onChange={e => setNoteDraft(e.target.value)}
                    />
                    <div className={styles.noteModalFooter}>
                        <Button
                            buttonText="Cancel"
                            onClick={onClose}
                            type="pink"
                            size="small"
                        />
                        <Button
                            buttonText="Done"
                            onClick={onDone}
                            type="pink"
                            size="small"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
