import NavigationBar from "@/app/.components/Navigation Bar/navigation";
import styles from "./chatsection.module.css";

export default function ChatSection() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Chat Section</h1>
                {/* Add your chat content here */}
            </main>
            <NavigationBar />
        </div>
    );
}
