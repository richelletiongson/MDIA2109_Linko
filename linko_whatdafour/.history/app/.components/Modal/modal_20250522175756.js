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
                <span className={styles.icon}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 0C12.0196 0 14.4359 1.00089 16.2175 2.78249C17.9991 4.56408 19 6.98044 19 9.5C19 12.0196 17.9991 14.4359 16.2175 16.2175C14.4359 17.9991 12.0196 19 9.5 19C6.98044 19 4.56408 17.9991 2.78249 16.2175C1.00089 14.4359 0 12.0196 0 9.5C0 6.98044 1.00089 4.56408 2.78249 2.78249C4.56408 1.00089 6.98044 0 9.5 0ZM9.5 17.6429C11.6596 17.6429 13.7308 16.785 15.2579 15.2579C16.785 13.7308 17.6429 11.6596 17.6429 9.5C17.6429 7.34038 16.785 5.26921 15.2579 3.74213C13.7308 2.21505 11.6596 1.35714 9.5 1.35714C7.34038 1.35714 5.26921 2.21505 3.74213 3.74213C2.21505 5.26921 1.35714 7.34038 1.35714 9.5C1.35714 11.6596 2.21505 13.7308 3.74213 15.2579C5.26921 16.785 7.34038 17.6429 9.5 17.6429ZM10.5179 13.9107C10.5179 14.1807 10.4106 14.4396 10.2197 14.6304C10.0288 14.8213 9.76995 14.9286 9.5 14.9286C9.23005 14.9286 8.97115 14.8213 8.78027 14.6304C8.58938 14.4396 8.48214 14.1807 8.48214 13.9107C8.48214 13.6408 8.58938 13.3819 8.78027 13.191C8.97115 13.0001 9.23005 12.8929 9.5 12.8929C9.76995 12.8929 10.0288 13.0001 10.2197 13.191C10.4106 13.3819 10.5179 13.6408 10.5179 13.9107ZM9.5 4.07143C9.67997 4.07143 9.85257 4.14292 9.97982 4.27018C10.1071 4.39743 10.1786 4.57003 10.1786 4.75V10.8571C10.1786 11.0371 10.1071 11.2097 9.97982 11.337C9.85257 11.4642 9.67997 11.5357 9.5 11.5357C9.32003 11.5357 9.14743 11.4642 9.02018 11.337C8.89292 11.2097 8.82143 11.0371 8.82143 10.8571V4.75C8.82143 4.57003 8.89292 4.39743 9.02018 4.27018C9.14743 4.14292 9.32003 4.07143 9.5 4.07143Z" fill="#AD2929"/>
                    </svg>
                </span>
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
