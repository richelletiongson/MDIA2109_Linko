import Image from "next/image";
import React from "react";
import Button from "@/app/.components/buttons";
import input_field from "@/app/.components/input_field/input_field.js";
import styles from "./matched.module.css";
import { FaClose, FaTimes, FaRegCommentDots, FaRegCompass, FaRegUser, FaArrowLeft } from "react-icons/fa";


export default function MatchPage() {
  return (
    <div className={styles.container}>
      {/* navigation bar */}
      <div className={styles.header}>
        <button className={styles.backBtn}>
          <FaArrowLeft size={28} color="#fff" />
        </button>
        <div className={styles.header}>
          <Image src="/logos/linko_primarylogo.svg" alt="Linko logo" width={268} height={268} className={styles.logo} />
        </div>
      </div>

      {/* avatar area */}
      <div className={styles.avatars}>
        <div className={styles.avatarLeft}>
          <Image
            src="/matchingusers/user3.png"
            alt="user3"
            width={300}
            height={300}
            className={styles.avatarImg}
          />
        </div>
        <div className={styles.avatarRight}>
          <Image
            src="/matchingusers/user_myself.png"
            alt="myself"
            width={300}
            height={300}
            className={styles.avatarImg}
          />
        </div>
      </div>

      {/* matched text */}
      <div className={styles.text}>
        You connected<br />with <b>Bonnie!</b>
      </div>

      {/* input field */}
      <div className={styles.inputRow}>
        <input className={styles.input} placeholder="Type..." />
        <button className={styles.sendBtn}>
          <svg width="24" height="24" fill="none" stroke="#6B57FF" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M2 21l21-9-21-9v7l15 2-15 2v7z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}