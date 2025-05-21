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
        <div className={styles.photoGalleryOverlay}>
            <div className={styles.photoGalleryModalBox}>
                <h2 className={styles.photoGalleryTitle}>Photo Gallery</h2>
                <div className={styles.photoGalleryGrid}>
                    {availablePhotos.map((photo) => (
                        <div
                            key={photo}
                            className={
                                selectedPhotos.includes(photo)
                                    ? `${styles.photoGalleryItem} ${styles.selected}`
                                    : styles.photoGalleryItem
                            }
                            onClick={() => togglePhoto(photo)}
                        >
                            <img
                                src={photo}
                                alt="gallery"
                                className={styles.photoGalleryImg}
                                style={{ opacity: selectedPhotos.includes(photo) ? 1 : 0.7 }}
                            />
                            {selectedPhotos.includes(photo) && (
                                <div className={styles.photoGalleryCheck}>✓</div>
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.photoGalleryFooter}>
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
    );
}
