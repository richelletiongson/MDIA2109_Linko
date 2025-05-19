"use client";
import React from "react";
import Image from "next/image";
import Button from "../.components/buttons";
import styles from "./homepage.module.css";
import { FaHeart, FaTimes, FaRegCommentDots, FaRegCompass, FaRegUser } from "react-icons/fa";
import { Container } from "../.components/Container/container.js";

export default function HomePage() {
  // Placeholder user data
  const user = {
    name: "Danny",
    age: 22,
    location: "Vancouver, BC",
    pronouns: "Non-Binary",
    ethnicity: "Korean",
    personality: "ESTP",
    quote: "The weeknd is going to Van, who wants come?",
    profileImg: "/photos/profile1.jpg", // Replace with actual image path
    bgImgs: [
      "/photos/bg1.jpg",
      "/photos/bg2.jpg",
      "/photos/bg3.jpg"
    ]
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <Image src="/logos/linko_primarylogo.svg" alt="Linko logo" width={268} height={268} className={styles.logo} />
      </div>
      {/* user Image Section */}
      <div className={styles.profileImageSection}>
        {/* images (blurred, behind) */}
        <div className={styles.bgImages}>
          {user.bgImgs.map((img, i) => (
            <div key={i} className={styles.bgImgWrapper}>
              <Image src={img} alt="bg" width={80} height={80} className={styles.bgImg} />
            </div>
          ))}
        </div>
        {/* Main profile image */}
        <div className={styles.profileImgCircle}>
          <Image src={user.profileImg} alt="Profile" width={220} height={220} className={styles.profileImg} />
        </div>
      </div>

      {/* User Info */}
      <div className={styles.userInfo}>
        <div className={styles.userName}>{user.name} <span className={styles.userAge}>{user.age}</span></div>
        <div className={styles.userLocation}>{user.location}</div>
        <div className={styles.tagsRow}>
          <Button buttonText={user.pronouns} type="light_purple" size="small_pill" />
          <Button buttonText={user.ethnicity} type="green" size="small_pill" />
          <Button buttonText={user.personality} type="light_purple" size="small_pill" />
        </div>
      </div>

      {/* Quote Section */}
      <Container
        text={`“${user.quote}”`}
        color="darkPurple"
        size="small"
        border={true}
        textStyle="Bold_CommunityRules"
      />

      {/* Like/Dislike Buttons */}
      <div className={styles.actionButtons}>
        <Button
          buttonText={<FaTimes size={32} />}
          type="pink"
          size="big_round"
          onClick={() => {}}
        />
        <Button
          buttonText={<FaHeart size={32} />}
          type="pink"
          size="big_round"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
