"use client";
import NavigationBar from "@/app/.components/Navigation Bar/navigation";
import styles from "./chatsection.module.css";
import Header from "@/app/.components/Header/header";
import Button from "@/app/.components/buttons";
import { useRouter } from "next/navigation";

export default function ChatSection() {
    const router = useRouter();

    // Back button for header
    const backButton = (
        <Button
            buttonText={
                <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M20 24L12 16L20 8'
                        stroke='#C2FF3E'
                        strokeWidth='3'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            }
            onClick={() => router.back()}
            type='transparent_greentxt'
            size='small_round'
        />
    );

    return (
        <div className={styles.container}>
            <video
                className={styles.backgroundVideo}
                autoPlay
                loop
                muted
                playsInline>
                <source
                    src='/videos/background.mp4'
                    type='video/mp4'
                />
            </video>
            <div className={styles.overlay} />
            <Header leftButton={backButton} />
            <main className={styles.main}>
                <h1 className={styles.title}>Chat Section</h1>
                {/* Add your chat content here */}
            </main>
            <NavigationBar />
        </div>
    );
}
