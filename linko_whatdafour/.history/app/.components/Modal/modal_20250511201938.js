import classnames from "classnames";
import styles from "./modal.module.css";
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
