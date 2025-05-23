import React from 'react';
import classnames from "classnames";
import styles from "./modal.module.css";
import Button from "../buttons";

export const WarningMessage = ({
    isOpen = false,
    onClose = null,
    message = "Please write an answer to continue !",
    type = "error",
    size = "small",
    children,
}) => {
    if (!isOpen) return null;
    return (
        <div className={styles.bottomModalOverlay} onClick={onClose}>
            <div className={styles.bottomModalBox} onClick={e => e.stopPropagation()}>
                <div className={classnames(styles.warningBox, styles[type], styles[size])}>
                    <span className={styles.text}>{message || children}</span>
                </div>
            </div>
        </div>
    );
};

export const SuccessMessage = ({
    isOpen = false,
    onClose = null,
    message = "Message sent!",
    type = "success",
    size = "small",
    children,
}) => {
    if (!isOpen) return null;
    return (
        <div className={styles.bottomModalOverlay} onClick={onClose}>
            <div className={styles.bottomModalBox} onClick={e => e.stopPropagation()}>
                <div className={classnames(styles.successBox, styles[type], styles[size])}>
                    <span className={styles.icon}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.625 9.375L8.75 12.5L14.375 6.875M18.125 10C18.125 12.1549 17.269 14.2215 15.7452 15.7452C14.2215 17.269 12.1549 18.125 10 18.125C7.84512 18.125 5.77849 17.269 4.25476 15.7452C2.73102 14.2215 1.875 12.1549 1.875 10C1.875 7.84512 2.73102 5.77849 4.25476 4.25476C5.77849 2.73102 7.84512 1.875 10 1.875C12.1549 1.875 14.2215 2.73102 15.7452 4.25476C17.269 5.77849 18.125 7.84512 18.125 10Z" stroke="#6EAF70" strokeWidth="1.25" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className={styles.text}>{message || children}</span>
                </div>
            </div>
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
        <div
            className={styles.overlay}
            onClick={onClose}
        >
            <div
                className={modalClasses}
                onClick={e => e.stopPropagation()}
            >
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
