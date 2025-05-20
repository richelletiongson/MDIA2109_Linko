"use client";
import Image from "next/image";
import styles from "./chat.module.css";
import { Container } from "@/app/.components/container/container";
import NavigationBar from "@/app/.components/Navigation Bar/navigation";
import React, { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/app/.components/input_field/input_field";

const messages = [
  {
    avatar: "/photos/chat01.png",
    text: "Hi guys!",
    self: false,
    size: "chatSizeShortest",
  },
  {
    avatar: "/photos/chat01.png",
    text: "Is anyone from Burnaby?",
    self: false,
    size: "chatSizeMiddle",
  },
  {
    avatar: "/photos/chat01.png",
    text: "I'm going there alone",
    self: false,
  },
  {
    avatar: "/photos/chat01.png",
    text: "Feel free to add me!",
    self: false,
    size: "chatSizeMiddle",
  },
  {
    avatar: "/photos/chat02.png",
    text: "Heyyyyyy!",
    self: false,
  },
  {
    avatar: "/photos/chat02.png",
    text: "ADDED!",
    self: false,
    size: "chatSizeShortest",
  },
  {
    avatar: "/photos/chat03.png",
    text: "Hellooooo",
    self: false,
  },
  {
    avatar: "/photos/chat04.png",
    text: "Can we sell the ticket here?",
    self: false,
  },
  {
    avatar: "/photos/chat05.png",
    text: "Noo! You will be banned if you do",
    self: false,
  },
  {
    avatar: "/photos/chat05.png",
    text: "I saw it in the rules before joined",
    self: false,
  },
];

export default function ChatPage() {
  const router = useRouter();
  const chatEndRef = useRef(null);
  const [inputValue, setInputValue] = React.useState("");

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={() => router.back()}>&lt;</button>
        <span className={styles.headerTitle}>Jennie Kim, BC</span>
        <button className={styles.menuBtn}>⋮</button>
      </div>
      {/* Chat Area */}
      <div className={styles.chatContainer}>
        {messages.map((msg, idx) => (
          <div className={styles.messageRow} key={idx} style={{ justifyContent: msg.self ? "flex-end" : "flex-start" }}>
            {!msg.self && (
              <Image src={msg.avatar} alt="avatar" width={38} height={38} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            )}
            <Container color={msg.self ? "white" : "white"} size={msg.size ? msg.size : (msg.text.length > 30 ? "chatSizeLong" : msg.text.length > 18 ? "chatSizeMedium" : "chatSizeShort")}>
              {msg.text}
            </Container>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      {/* Input Area */}
      <InputField
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Aa"
        size="chatSize"
        color="purple1"
      />
      <div className={styles.inputArea}>
        <button className={styles.sendBtn}>+</button>
      </div>
    </div>
  );
}
