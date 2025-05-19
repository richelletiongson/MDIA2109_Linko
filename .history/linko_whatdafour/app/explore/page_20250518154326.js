'use client';
import styles from './explore.module.css';
import { ContainerWithMedia } from '../.components/container/ContainerWithMedia';
import Button from '../.components/buttons';

const events = [
  {
    artist: 'Jennie Kim',
    location: 'Vancouver, British Columbia',
    date: 'March 13, 2025',
    image: '/photos/Jennie.png',
  },
  {
    artist: 'FKA twigs',
    location: 'Toronto, Ontario',
    date: 'March 25, 2025',
    image: '/photos/FKA.png',
  },
  {
    artist: 'Olivia Dean',
    location: 'Vancouver, British Columbia',
    date: 'March 15, 2025',
    image: '/photos/Olivia.jpeg',
  },
  {
    artist: 'Drake',
    location: 'Toronto, Ontario',
    date: 'April 15, 2025',
    image: '/photos/Drake.png',
  },
  {
    artist: 'Doechii',
    location: 'Calgary, Alberta',
    date: 'July 17, 2025',
    image: '/photos/Doechii.png',
  },
  {
    artist: 'The Weeknd',
    location: 'Vancouver, British Columbia',
    date: 'July 25, 2025',
    image: '/photos/The Weekend.png',
  },
];

export default function ExplorePage() {
  return (
    <div className={styles.page}>
     

      {/* Banner */}
      <div className={styles.banner}>
        <img src="/photos/explore_banner.png" alt="The Weeknd" className={styles.bannerImg} />
      </div>

      {/* Event Cards */}
      <div className={styles.grid}>
        {events.map((event, idx) => (
          <ContainerWithMedia
            key={idx}
            color="white"
            size="channelSize"
            imageSrc={event.image}
            imageAlt={event.artist}
            textBlocks={[
              { text: event.artist, styleKey: "ExtraBold_Channel" },
              { text: event.location, styleKey: "Regular_Channel" },
              { text: event.date, styleKey: "ExtraLight_Channel" },
            ]}
            button={
              <Button
                buttonText="Join"
                type="pink"
                size="small_pill"
              />
            }
          />
        ))}
      </div>

    
    </div>
  );
}
