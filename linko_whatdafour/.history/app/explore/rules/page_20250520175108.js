"use client";
import React from "react";
import styles from "./rules.module.css";
import { Container } from "@/app/.components/container/container";
import Button from "@/app/.components/buttons";
import Header from "@/app/.components/Header/header";
import { useRouter } from "next/navigation";

export default function RulesPage() {
  const router = useRouter();
  return (
    <div className={styles.rulesBg}>
      <Header
        leftButton={null}
      />
      <div className={styles.rulesContainerWrapper}>
        <Container color="black" size="rulesSize" border={true}>
          <h2 className={styles.title}>Community Rules</h2>
          <div className={styles.rulesContent}>
            <p className={styles.intro}>
              <b>Welcome!</b>
              <br />
              Before joining, please read and agree to the following terms to help us maintain a respectful and enjoyable environment for everyone:
            </p>
            <ol className={styles.rulesList}>
              <li>
                <b>No Ticket Sales or Promotions</b>
                <span>
                  <br />This group is for sharing interests, experiences, and discussions related to concerts. Selling, buying, or promoting tickets, merchandise, or any commercial content is strictly prohibited.
                </span>
              </li>
              <li>
                <b>Respectful Communication</b>
                <span>
                  <br />Please treat all members with respect. Bullying, harassment, hate speech, or any form of discriminatory comments, including but not limited to those based on race, gender, sexuality, or religion, will not be tolerated.
                </span>
              </li>
              <li>
                <b>No Spamming</b>
                <span>
                  <br />Avoid posting repetitive messages, irrelevant content, or unsolicited links.
                </span>
              </li>
              <li>
                <b>Stay On Topic</b>
                <span>
                  <br />Keep the conversation focused on concerts, artists, and related interests. Off-topic discussions should be kept to a minimum.
                </span>
              </li>
              <li>
                <b>Violation Consequences</b>
                <span>
                  <br />Any member who violates these terms may be removed from the group without warning.
                </span>
              </li>
            </ol>
            <p className={styles.confirmation}>
              By joining the group chat, you confirm that you have read, understood, and agree to follow these terms.
              Let's keep this space positive and fun for all music lovers! <span role="img" aria-label="music">🎸</span>
            </p>
          </div>
          <div className={styles.buttonRow}>
            <Button buttonText="Next" type="pink" size="big_pill" onClick={() => router.push("/explore/chatsection")} />
          </div>
        </Container>
      </div>
    </div>
  );
}
