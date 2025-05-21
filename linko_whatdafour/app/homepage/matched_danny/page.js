import Image from "next/image";
import React from "react";
import Button from "@/app/.components/buttons";
import InputField from "@/app/.components/input_field/input_field.js";
import styles from "./matched_danny.module.css";
import Header from '@/app/.components/Header/header';



export default function MatchPage() {
  return (
    <div className={styles.container}>
        {/* Header */}
        <Header />

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
        <div style={{ position: 'relative', width: 'fit-content' }}>
          <InputField
            size="medium"
            color="white"
            placeholder="Type..."
          />
          <button className={styles.sendBtn} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.966 7.21489C39.5942 6.84563 39.1277 6.58605 38.6178 6.46466C38.108 6.34328 37.5746 6.36479 37.0762 6.52683L8.31559 16.1203C7.7822 16.2893 7.31085 16.6126 6.96108 17.0493C6.61132 17.4861 6.39883 18.0167 6.35045 18.5741C6.30207 19.1315 6.41997 19.6908 6.68925 20.1813C6.95854 20.6718 7.36714 21.0714 7.86344 21.3298L19.7963 27.2274L25.6939 39.1995C25.9309 39.6682 26.2936 40.0616 26.7415 40.3359C27.1893 40.6101 27.7047 40.7544 28.2298 40.7526H28.4264C28.9888 40.7112 29.5258 40.5015 29.9675 40.151C30.4093 39.8004 30.7353 39.325 30.9034 38.7867L40.6344 10.1047C40.8082 9.60918 40.8376 9.07448 40.7193 8.56288C40.601 8.05127 40.3397 7.5838 39.966 7.21489ZM9.53443 18.8332L34.6385 10.4586L20.7006 24.3966L9.53443 18.8332ZM28.3674 37.6465L22.7844 26.4804L36.7224 12.5424L28.3674 37.6465Z" fill="#9B71F1"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}