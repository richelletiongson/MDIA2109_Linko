'use client';
import React from 'react';
import Image from 'next/image';
import styles from './chat.module.css';
import { Container } from '../.components/container/container';

export default function page() {
    return (
        <div className={styles.page}>
            <Container
                text="“The weeknd is going to Van, who wants come?”"
                color="black"
                size="small"
                border={true}
                textStyle="Regular"
            />

            <Container
                text="Hi! My name is Richelle, I love music and I love meeting new people!!"
                color="darkpurple"
                size="medium"
                border={false}
                textStyle="Regular"
            />
        </div>
    );
}
