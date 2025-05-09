'use client';
import React from 'react';
import Image from "next/image";
import styles from "./profile.module.css";
import { useRouter } from 'next/navigation';
import { Button } from './.components/buttons';
/*
export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logomark}
          src="/logos/linko_logomark.svg"
          alt="Linko logomark"
          width={268}
          height={268}
          priority
        />
        <div className={styles.button}>
        <Button
          buttonText="GET STARTED"
          onClick={()=>router.push("/onboard")}
          type="purple"
          size="big"
        />
        </div>

      </main>
    </div>
  )

}
*/