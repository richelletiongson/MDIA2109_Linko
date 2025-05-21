"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavigationBar from "@/app/.components/Navigation Bar/navigation";
import styles from "./chatsection.module.css";
import Header from "@/app/.components/Header/header";
import Button from "@/app/.components/buttons";
import { useRouter } from "next/navigation";
import InputField from "@/app/.components/input_field/input_field";
import { ContainerWithMedia } from "@/app/.components/container/ContainerWithMedia";
import { Lexend } from "next/font/google";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "600", "700"], // Add more weights if needed
});

const matches = [
    "/photos/photo_matching/matching1.png",
    "/photos/photo_matching/matching2.png",
    "/photos/photo_matching/matching3.png",
    "/photos/photo_matching/matching4.png",
    "/photos/photo_matching/matching5.png",
    "/photos/photo_matching/matching6.png",
    "/photos/photo_matching/matching7.png",
];

const chatList = [
    {
        avatar: "/photos/jennie.png",
        name: "Jennie Kim, BC",
        message: "Heyy, what time is good...",
        time: "11:12 am",
        unread: 3,
    },
    {
        avatar: "/photos/FKA.png",
        name: "FKA twigs, ON",
        message: "Heyy, what time is good...",
        time: "11:12 am",
        unread: 3,
    },
    {
        avatar: "/photos/olivia.png",
        name: "Olivia Dean, BC",
        message: "Heyy, what time is good...",
        time: "11:12 am",
        unread: 3,
    },
    {
        avatar: "/photos/doechii.png",
        name: "Doechii, BC",
        message: "Heyy, what time is good...",
        time: "11:12 am",
        unread: 3,
    },
];

export default function ChatSection() {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState("Channels");

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
            <Header leftButton={backButton} />
            <main className={styles.main}>
                {/* Horizontal avatar list */}
                <div className={styles.avatarScroll}>
                    {matches.map((src, idx) => (
                        <div
                            className={styles.avatarWrapper}
                            key={idx}>
                            <Image
                                src={src}
                                alt='match'
                                width={56}
                                height={56}
                                className={styles.avatarImg}
                            />
                        </div>
                    ))}
                </div>
                {/* Section title and icon */}
                <div className={styles.sectionTitleRow}>
                    <h1 className={styles.title}>Matches - Start the convo!</h1>
                    <span className={styles.groupIcon}>
                        <svg
                            width='36'
                            height='36'
                            viewBox='0 0 36 36'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <circle
                                cx='18'
                                cy='18'
                                r='18'
                                fill='none'
                            />
                            <path
                                d='M27 27C27 24.2386 22.4183 22 18 22C13.5817 22 9 24.2386 9 27'
                                stroke='#C2FF3E'
                                strokeWidth='2.5'
                                strokeLinecap='round'
                            />
                            <circle
                                cx='18'
                                cy='15'
                                r='5'
                                stroke='#C2FF3E'
                                strokeWidth='2.5'
                            />
                        </svg>
                    </span>
                </div>
                <div className={styles.sectionDivider}></div>
                {/* Search bar and tabs */}
                <div className={styles.searchTabsRow}>
                    <span className={styles.searchIcon}>
                        <svg
                            width='28'
                            height='28'
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <circle
                                cx='13'
                                cy='13'
                                r='9'
                                stroke='#fff'
                                strokeWidth='2.5'
                            />
                            <path
                                d='M21 21L26 26'
                                stroke='#fff'
                                strokeWidth='2.5'
                                strokeLinecap='round'
                            />
                        </svg>
                    </span>

                    <div className={styles.tabs}>
                        {["Channels", "Friends", "Groups"].map((tab) => (
                            <Button
                                key={tab}
                                buttonText={tab}
                                onClick={() => setActiveTab(tab)}
                                type={
                                    activeTab === tab
                                        ? "purple"
                                        : "light_purple"
                                }
                                size='big_pill'
                                className={styles.tabBtn}
                            />
                        ))}
                    </div>
                </div>
                {/* Chat list */}
                <div className={styles.chatList}>
                    {chatList.map((chat, idx) => (
                        <div
                            className={styles.chatItem}
                            key={idx}>
                            <Image
                                src={chat.avatar}
                                alt={chat.name}
                                width={72}
                                height={72}
                                className={styles.chatAvatar}
                            />
                            <div className={styles.chatInfo}>
                                <div className={styles.chatNameRow}>
                                    <span className={styles.chatName}>
                                        {chat.name}
                                    </span>
                                    <span className={styles.chatTime}>
                                        {chat.time}
                                    </span>
                                </div>
                                <div className={styles.chatMsgRow}>
                                    <span className={styles.chatMsg}>
                                        {chat.message}
                                    </span>
                                    <span className={styles.unreadBadge}>
                                        {chat.unread}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <NavigationBar />
        </div>
    );
}
