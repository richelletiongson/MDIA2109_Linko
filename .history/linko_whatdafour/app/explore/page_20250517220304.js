'use client';
import styles from './container.module.css';
import { ContainerWithMedia } from '../.components/container/ContainerWithMedia';
import Button from '../.components/buttons';

const events = [
  {
    artist: 'Jennie Kim',
    location: 'Vancouver, British Columbia',
    date: 'March 13, 2025',
    image: '/images/jennie_kim.jpg',
  },
  {
    artist: 'FKA twigs',
    location: 'Toronto, Ontario',
    date: 'March 25, 2025',
    image: '/images/fka_twigs.jpg',
  },
  {
    artist: 'Olivia Dean',
    location: 'Vancouver, British Columbia',
    date: 'March 15, 2025',
    image: '/images/olivia_dean.jpg',
  },
  {
    artist: 'Drake',
    location: 'Toronto, Ontario',
    date: 'April 15, 2025',
    image: '/images/drake.jpg',
  },
  {
    artist: 'Doechii',
    location: 'Calgary, Alberta',
    date: 'July 17, 2025',
    image: '/images/doechii.jpg',
  },
  {
    artist: 'The Weeknd',
    location: 'Vancouver, British Columbia',
    date: 'July 25, 2025',
    image: '/images/the_weeknd_card.jpg',
  },
];

export default function ExplorePage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.time}>9:41</span>
        <span className={styles.logo}>LINKO</span>
        <span className={styles.status}>...</span>
      </div>

      {/* Search Bar */}
      <div className={styles.searchRow}>
        <span className={styles.filterIcon}>≡</span>
        <input className={styles.searchInput} placeholder="Search concert, city..." />
        <span className={styles.searchIcon}>🔍</span>
      </div>

      {/* Banner */}
      <div className={styles.banner}>
        <img src="/images/the_weeknd_banner.jpg" alt="The Weeknd" className={styles.bannerImg} />
        <div className={styles.bannerText}>
          See The Weeknd live at BC Place Stadium in Vancouver on July 15, 2025, at 7:00 PM.
        </div>
        <div className={styles.dots}>
          <span className={styles.activeDot}></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Event Cards */}
      <div className={styles.grid}>
        {events.map((event, idx) => (
          <ContainerWithMedia
            key={idx}
            color="white"
            size="small"
            border="pink_border"
            imageSrc={event.image}
            imageAlt={event.artist}
            textBlocks={[
              { text: event.artist, styleKey: 'artist' },
              { text: event.location, styleKey: 'location' },
              { text: event.date, styleKey: 'date' },
            ]}
            button={
              <Button
                buttonText="Join"
                type="pink"
                size="small"
              />
            }
          />
        ))}
      </div>

      {/* Bottom Nav */}
      <div className={styles.bottomNav}>
        <div className={styles.navItem}><span>🏠</span><div>Home</div></div>
        <div className={styles.navItem}><span>💬</span><div>Chat</div></div>
        <div className={`${styles.navItem} ${styles.active}`}><span>🔍</span><div>Explore</div></div>
        <div className={styles.navItem}><span>👤</span><div>Profile</div></div>
      </div>
    </div>
  );
}