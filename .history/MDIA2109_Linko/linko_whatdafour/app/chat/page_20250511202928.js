'use client';
import React from 'react';
import Image from 'next/image';
import styles from './profile.module.css';
import { useRouter } from 'next/navigation';
import { Button } from '../.components/buttons';
import { Container } from '../.components/container/container';

export default function page() {

    return (
        <div className={styles.page}>
            <Container
            text="Chat" 
            color="darkPurple"
            size="channelSize"
            border={false}
            textStyle="ExtraBold_Channel"
            />
        </div>
    )
}