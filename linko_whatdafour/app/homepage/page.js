"use client";
import React from "react";
import Image from "next/image";
import Button from "../.components/buttons";
import styles from "./homepage.module.css";
import { FaHeart, FaTimes, FaRegCommentDots, FaRegCompass, FaRegUser } from "react-icons/fa";
import { Container } from "../.components/container/container.js";
import NavigationBar from "../.components/Navigation Bar/navigation";

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
  };

  const users = 
  [
    { img: "/matchingusers/user-1.png" }, // left
    { img: "/matchingusers/user1.png" },  // center
    { img: "/matchingusers/user2.png" },  // right
  ];

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        {/* Header */}
        <div className={styles.header}>
          <Image src="/logos/linko_primarylogo.svg" alt="Linko logo" width={268} height={268} className={styles.logo} />
        </div>
        {/* Profile Images Row */}
        <div className={styles.profileImageSection}>
          <div className={styles.profileImagesRow}>
            <Image src={users[0].img} alt="user-1" width={110} height={110} className={styles.sideProfileImg + ' ' + styles.leftProfileImg} />
            <Image src={users[1].img} alt="user1" width={220} height={220} className={styles.mainProfileImg} />
            <Image src={users[2].img} alt="user2" width={110} height={110} className={styles.sideProfileImg + ' ' + styles.rightProfileImg} />
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
        <div className={styles.quoteSection}>
        <Container
          text={`"${user.quote}"`}
          color="darkPurple"
          size="small"
          border={true}
          textStyle="Regular"
        />
        </div>


        {/* Like/Dislike Buttons */}
        <div className={styles.actionButtons}>
          <Button
            buttonText={<FaTimes size={32} />}
            type="pink"
            size="big_round"
          />
          <Button
            buttonText={<FaHeart size={32} />}
            type="pink"
            size="big_round"

          />
        </div>
      </div>
      {/* Bottom Navigation */}
      <NavigationBar />
    </div>
  );
}
