"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "@/app/.components/buttons";
import { SuccessMessage } from "@/app/.components/Modal/modal";
import InputField from "@/app/.components/input_field/input_field.js";
import styles from "./matched_danny.module.css";
import Header from '@/app/.components/Header/header';
import { useRouter } from "next/navigation";

export default function MatchPage() {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSentButtonClick = () => {
    setShowSuccess(true);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <Header
        leftButton={
          <Button
            buttonText={<svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.95399 11.0783L14.6189 19.4618C14.9816 19.747 15.1572 20.0797 15.1456 20.4599C15.134 20.8401 14.9463 21.1728 14.5826 21.4579C14.2189 21.7431 13.7957 21.8857 13.313 21.8857C12.8303 21.8857 12.4071 21.7431 12.0433 21.4579L0.870603 12.7037C0.580402 12.4755 0.362751 12.2189 0.217651 11.9337C0.0725503 11.6486 0 11.3634 0 11.0783C0 10.7931 0.0725503 10.508 0.217651 10.2228C0.362751 9.93766 0.580402 9.68102 0.870603 9.4529L12.0433 0.670123C12.4061 0.384968 12.8356 0.246953 13.3318 0.256078C13.8281 0.265203 14.2571 0.412723 14.6189 0.698639C14.9807 0.984554 15.162 1.31723 15.163 1.69668C15.164 2.07613 14.9826 2.40881 14.6189 2.69472L3.95399 11.0783Z" fill="white" />
            </svg>}
            type="transparent_whitetxt"
            size="big_round"
            onClick={() => router.push('/homepage')}
          />
        }
      />

      {/* avatar area */}
      <div className={styles.avatars}>
        <div className={styles.avatarLeft}>
          <Image
            src="/matchingusers/user1.png"
            alt="user3"
            width={330}
            height={330}
            className={styles.avatarImg}
          />
        </div>
        <div className={styles.avatarRight}>
          <Image
            src="/matchingusers/user_myself.png"
            alt="myself"
            width={330}
            height={330}
            className={styles.avatarImg}
          />
        </div>
      </div>

      {/* matched text */}
      <div className={styles.text}>
        You connected<br />with <b>Danny!</b>
      </div>

      {/* input field */}
      <div className={styles.inputRow}>
        <div className={styles.inputWrapper}>
          <InputField
            size="medium"
            color="white"
            placeholder="Type..."
            rightButton={
              <Button
                className={styles.rightButton}
                buttonText={
                  <svg width="50" height="50" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.966 7.21489C39.5942 6.84563 39.1277 6.58605 38.6178 6.46466C38.108 6.34328 37.5746 6.36479 37.0762 6.52683L8.31559 16.1203C7.7822 16.2893 7.31085 16.6126 6.96108 17.0493C6.61132 17.4861 6.39883 18.0167 6.35045 18.5741C6.30207 19.1315 6.41997 19.6908 6.68925 20.1813C6.95854 20.6718 7.36714 21.0714 7.86344 21.3298L19.7963 27.2274L25.6939 39.1995C25.9309 39.6682 26.2936 40.0616 26.7415 40.3359C27.1893 40.6101 27.7047 40.7544 28.2298 40.7526H28.4264C28.9888 40.7112 29.5258 40.5015 29.9675 40.151C30.4093 39.8004 30.7353 39.325 30.9034 38.7867L40.6344 10.1047C40.8082 9.60918 40.8376 9.07448 40.7193 8.56288C40.601 8.05127 40.3397 7.5838 39.966 7.21489ZM9.53443 18.8332L34.6385 10.4586L20.7006 24.3966L9.53443 18.8332ZM28.3674 37.6465L22.7844 26.4804L36.7224 12.5424L28.3674 37.6465Z" fill="#9B71F1" />
                  </svg>
                }
                type="transparent_whitetxt"
                size="big_round"
                onClick={handleSentButtonClick}
              />
            }
          />
        </div>
      </div>
      <SuccessMessage
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          router.push("/homepage/user2");
        }}
        message="Message sent!"
        type="success"
        size="small"
        className="bottomModalOverlay"
      />
    </div>
  );
}