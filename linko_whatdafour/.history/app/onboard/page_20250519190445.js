'use client';
import React from 'react';
import Image from 'next/image';
import Button from "@/app/.components/buttons";
import { useRouter } from 'next/navigation';
import styles from './onboard.module.css';

export default function OnboardPage() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="/videos/onboard_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <Image
          src="/logos/linko_primarylogo.svg"
          alt="Linko logo"
          width={260}
          height={80}
          className={styles.logo}
        />
        <div className={styles.buttonGroup}>
            <Button
                buttonText="Log in with Google"
                type="white"
                size="long"
                onClick={() => router.push("/onboard/signup")}
            />
            <Button
                buttonText="Log in"
                type="white"
                size="long"
                onClick={() => router.push("/onboard/signup")}
            />
            <Button
                buttonText="Sign Up"
                type="white"
                size="long"
                onClick={() => router.push("/onboard/signup")}
            />
        </div>
      </div>
    </div>
  );
}
