'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from "@/app/.components/buttons";
import { useRouter } from 'next/navigation';
import styles from './onboard.module.css';

export default function OnboardPage() {
  const router = useRouter();
  const [showPrimaryLogo, setShowPrimaryLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrimaryLogo(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
      <div
        className={`${styles.centeredLogomark} ${showPrimaryLogo ? styles.fadeOut : ''}`}
        style={{ pointerEvents: 'none' }}
      >
        <Image
          src="/logos/linko_logomark.svg"
          alt="Linko logomark"
          width={800}
          height={800}
          priority
        />
      </div>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            className={`${styles.primaryLogo} ${showPrimaryLogo ? styles.fadeIn : ''}`}
            src="/logos/linko_primarylogo.svg"
            alt="Linko primary logo"
            width={300}
            height={100}
            priority
          />
        </div>
        <div className={styles.buttonGroup}>
          <Button
            buttonText="Log in with Google"
            type="white"
            size="big"
            onClick={() => router.push("/onboard/signup")}
          />
          <Button
            buttonText="Log in"
            type="white"
            size="big"
            onClick={() => router.push("/onboard/signup")}
          />
          <Button
            buttonText="Sign Up"
            type="white"
            size="big"
            onClick={() => router.push("/onboard/signup")}
          />
        </div>
      </div>
    </div>
  );
}
