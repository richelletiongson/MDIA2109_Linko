'use client';
import React from 'react';
import Image from 'next/image';
import styles from './profile.module.css';
import { useRouter } from 'next/navigation';
import { Button } from '../.components/buttons';


export default function ProfilePage() {
  const router = useRouter();
  return (
  
    
  












    <div className={styles.page}>
  
      
        <div className={styles.logoRow}>
          <Image src="/logos/linko_primarylogo.svg" alt="Linko logo" width={130} height={30} className={styles.logo} />
          <div className={styles.settingsButton}>
          <Button
            buttonText={<Image src="app/public/icons/settings.svg" alt="settings" width={24} height={24} />}
            onClick={()=>router.push("/profile/settings")}
            type="transparent-greentxt"
            size="small_round"
          />
          </div>
     
          
          
        </div>
        <div className={styles.profilePicWrapper}>
          <Image src="/profilepic.jpg" alt="Profile" width={200} height={200} className={styles.profilePic} />
          <button className={styles.editPicBtn} aria-label="Edit profile picture">
            <span role="img" aria-label="edit">✏️</span>
          </button>
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.name}>Richelle <span className={styles.age}>21</span></h2>
          <div className={styles.location}>Vancouver, BC</div>
        </div>
    

      {/* Note Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Note</h3>
        <div className={styles.noteBox}>
          "I'm going to BlackPink on 22th at 6pm with my sister!"
        </div>
        <Button buttonText="Edit" type="white" size="small" />
      </section>

      {/* Highlights Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Highlights</h3>
        <div className={styles.tagsRow}>
          <span className={`${styles.tag} ${styles.highlight}`}>She/her</span>
          <span className={`${styles.tag} ${styles.highlight}`}>English</span>
          <span className={`${styles.tag} ${styles.highlight}`}>ESTP</span>
          <span className={`${styles.tag} ${styles.highlight}`}>Night owl</span>
          <span className={`${styles.tag} ${styles.highlight}`}>Going with the flow</span>
        </div>
        <Button buttonText="Edit" type="white" size="small" />
      </section>

      {/* Bio Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Bio</h3>
        <div className={styles.bioBox}>
          Hi! My name is Richelle, I love music and I love meeting new people!!
        </div>
        <Button buttonText="Edit" type="white" size="small" />
      </section>

      {/* Photos Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Photos</h3>
        <div className={styles.photosGrid}>
          {/* Replace with dynamic images as needed */}
          {[1,2,3,4,5,6].map((n) => (
            <div key={n} className={styles.photoWrapper}>
              <Image src={`/photos/photo${n}.jpg`} alt={`Photo ${n}`} width={100} height={100} className={styles.photo} />
              <button className={styles.removePhotoBtn} aria-label="Remove photo">✖️</button>
            </div>
          ))}
        </div>
        <Button buttonText="+" type="white" size="small" />
      </section>

      {/* Genres Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Genres</h3>
        <div className={styles.tagsRow}>
          <span className={`${styles.tag} ${styles.genre}`}>Hip-Hop</span>
          <span className={`${styles.tag} ${styles.genre}`}>Pop</span>
          <span className={`${styles.tag} ${styles.genre}`}>R&B</span>
        </div>
        <Button buttonText="+" type="white" size="small" />
      </section>

      {/* Music Events Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Music Events</h3>
        <div className={styles.tagsRow}>
          <span className={`${styles.tag} ${styles.event}`}>Live concerts</span>
          <span className={`${styles.tag} ${styles.event}`}>Music festivals</span>
        </div>
        <Button buttonText="+" type="white" size="small" />
      </section>

      {/* Interests Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Interests</h3>
        <div className={styles.tagsRow}>
          <span className={`${styles.tag} ${styles.interest}`}>Traveling</span>
          <span className={`${styles.tag} ${styles.interest}`}>Sports</span>
        </div>
        <Button buttonText="+" type="white" size="small" />
      </section>

      {/* More About Me Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>More About Me...</h3>
        <Button buttonText="Add prompt +" type="white" size="small" />
      </section>

      {/* Private Information Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Private Information</h3>
        <div className={styles.privateInfo}>
          <div>Email<br /><span>rtiongson@gmail.com</span></div>
          <div>Phone Number<br /><span>(123) 456-7891</span></div>
          <div>City, Province<br /><span>Vancouver, BC</span></div>
          <div>Birthday<br /><span>01/17/2004</span></div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className={styles.bottomNav}>
        <button className={styles.navBtn}><span role="img" aria-label="Home">🏠</span><div>Home</div></button>
        <button className={styles.navBtn}><span role="img" aria-label="Chat">💬</span><div>Chat</div></button>
        <button className={styles.navBtn}><span role="img" aria-label="Explore">🔍</span><div>Explore</div></button>
        <button className={styles.navBtn}><span role="img" aria-label="Profile">👤</span><div>Profile</div></button>
      </nav>
    </div>
  );
}



/*return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logomark}
          src="/logos/linko_logomark.svg"
          alt="Linko logomark"
          width={268}
          height={268}
          priority
        />
        <div className={styles.button}>
        <Button
          buttonText="GET STARTED"
          onClick={()=>router.push("/onboard")}
          type="purple"
          size="big"
        />
        </div>

      </main>
    </div>
  )*/