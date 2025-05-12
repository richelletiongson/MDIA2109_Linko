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
            buttonText={<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.1249 0H11.8736L10.9271 4.70836C10.1434 5.05754 9.39814 5.4865 8.70333 5.98836L4.12417 4.448L0 11.552L3.62968 14.7229C3.54203 15.5721 3.54203 16.4279 3.62968 17.2771L0 20.448L4.12563 27.552L8.70333 26.0131C9.39386 26.5105 10.1371 26.9411 10.9271 27.2916L11.8736 32H20.1249L21.0715 27.2916C21.8552 26.9425 22.6004 26.5135 23.2952 26.0116L27.8744 27.552L32 20.448L28.3689 17.2771C28.4565 16.4279 28.4565 15.5721 28.3689 14.7229L31.9985 11.552L27.8729 4.448L23.2967 5.98691C22.6018 5.48555 21.8566 5.05708 21.0729 4.70836L20.1249 0ZM15.9993 21.8182C14.4472 21.8182 12.9588 21.2052 11.8613 20.1141C10.7638 19.023 10.1473 17.5431 10.1473 16C10.1473 14.4569 10.7638 12.977 11.8613 11.8859C12.9588 10.7948 14.4472 10.1818 15.9993 10.1818C17.5513 10.1818 19.0398 10.7948 20.1372 11.8859C21.2347 12.977 21.8512 14.4569 21.8512 16C21.8512 17.5431 21.2347 19.023 20.1372 20.1141C19.0398 21.2052 17.5513 21.8182 15.9993 21.8182Z" fill="#C2FF3E"/>
              </svg>
              }
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