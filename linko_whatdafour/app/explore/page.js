import InputField from "../.components/input_field/input_field"
import styles from "./explore.module.css"
import classNames from "classnames";

export default function ExplorePage() {
    return(
        <div className={styles.container}>
            <div className={styles.input_container}>
                <InputField variant="send" />
                <InputField variant="border" />
                <InputField variant="rounded" />
                <InputField variant="rect" />
            </div>
        </div>
    )
}