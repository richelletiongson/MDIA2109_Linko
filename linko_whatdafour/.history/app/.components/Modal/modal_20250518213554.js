import React from 'react';
import classnames from "classnames";
import styles from "./modal.module.css";
import Button from "../buttons";
import { FiAlertCircle } from "react-icons/fi";

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

export const TextEditModal = ({
    isOpen,
    onClose,
    title,
    value,
    setValue,
    onDone,
    placeholder = ""
}) => {
    if (!isOpen) return null;
    return (
        <div className={styles.overlay}>
            <div className={styles.modalBox}>
                <div className={styles.noteModalContent}>
                    <textarea
                        className={styles.noteModalTextarea}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={placeholder}
                    />
                    <div className={styles.noteModalFooter}>
                        <Button
                            buttonText="Cancel"
                            onClick={onClose}
                            type="pink"
                            size="smaller"
                        />
                        <Button
                            buttonText="Done"
                            onClick={onDone}
                            type="pink"
                            size="smaller"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// PhotoGalleryModal: modal for selecting images
export function PhotoGalleryModal({ isOpen, onClose, onDone, availablePhotos, selectedPhotos, setSelectedPhotos }) {
    if (!isOpen) return null;
    const togglePhoto = (photo) => {
        setSelectedPhotos((prev) =>
            prev.includes(photo)
                ? prev.filter((p) => p !== photo)
                : [...prev, photo]
        );
    };
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#18162A', borderRadius: 20, padding: 24, minWidth: 340, maxWidth: 400 }}>
                <h2 style={{ color: 'white', textAlign: 'center', marginBottom: 16 }}>Photo Gallery</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 20 }}>
                    {availablePhotos.map((photo) => (
                        <div key={photo} style={{ position: 'relative', border: selectedPhotos.includes(photo) ? '3px solid #C2FF3E' : '2px solid #333', borderRadius: 10, overflow: 'hidden', cursor: 'pointer' }} onClick={() => togglePhoto(photo)}>
                            <img src={photo} alt="gallery" style={{ width: '100%', height: 90, objectFit: 'cover', opacity: selectedPhotos.includes(photo) ? 1 : 0.7 }} />
                            {selectedPhotos.includes(photo) && (
                                <div style={{ position: 'absolute', top: 6, right: 6, background: '#C2FF3E', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 13 }}>✓</div>
                            )}
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button onClick={onClose} style={{ background: '#FF5A7D', color: 'white', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 'bold', fontSize: 16 }}>Cancel</button>
                    <button onClick={onDone} style={{ background: '#C2FF3E', color: '#18162A', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 'bold', fontSize: 16 }}>Done</button>
                </div>
            </div>
        </div>
    );
}
