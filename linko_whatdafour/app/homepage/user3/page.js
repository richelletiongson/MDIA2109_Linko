"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/.components/buttons";
import styles from "../homepage.module.css";
import { FaHeart, FaTimes, FaRegCommentDots, FaRegCompass, FaRegUser } from "react-icons/fa";
import { Container } from "@/app/.components/container/container.js";
import NavigationBar from '@/app/.components/Navigation Bar/navigation.js';
import { useRouter } from "next/navigation";



export default function HomePage() {
    const router = useRouter();
    const [fadeOut, setFadeOut] = useState(false);
  // Placeholder user data
  const user = {
    name: "Bonnie",
    age: 25,
    location: "Burnaby, BC",
    pronouns: "She/her",
    ethnicity: "English",
    personality: "ENFP",
    perference: "Night owl",
    musictype: "DJ",
    quote: "Where are the Swifies!",
  };

  const users = 
  [
    { img: "/matchingusers/user2.png" }, // left
    { img: "/matchingusers/user3.png" },  // center
    { img: "/matchingusers/user4.png" },  // right
  ];

  const handleDragEnd = () => {
    console.log("drag end!");
    router.push("/homepage/user2");
  };


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
            <Image
              src={users[1].img}
              alt="user2"
              width={220}
              height={220}
              className={styles.mainProfileImg}
              draggable
              onDragEnd={handleDragEnd}
            />
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
            <Button buttonText={user.perference} type="green" size="small_pill" />
            <Button buttonText={user.musictype} type="light_purple" size="small_pill" />
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
