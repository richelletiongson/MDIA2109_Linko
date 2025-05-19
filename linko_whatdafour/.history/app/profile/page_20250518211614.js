'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './profile.module.css';
import { useRouter } from 'next/navigation';
import Button from "@/app/.components/buttons";
import TagsModal from '../.components/Tags Selection Modal/tagsmodal';
import { TextEditModal } from '@/app/.components/Modal/modal';
import { Container } from '@/app/.components/container/container.js';
import NavigationBar from '@/app/.components/Navigation Bar/navigation';

// PhotoGalleryModal: modal for selecting images
function PhotoGalleryModal({ isOpen, onClose, onDone, availablePhotos, selectedPhotos, setSelectedPhotos }) {
  if (!isOpen) return null;
  const togglePhoto = (photo) => {
    setSelectedPhotos((prev) =>
      prev.includes(photo)
        ? prev.filter((p) => p !== photo)
        : [...prev, photo]
    );
  };
  return (
    <div style={{ position: 'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'rgba(0,0,0,0.7)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ background:'#18162A', borderRadius:20, padding:24, minWidth:340, maxWidth:400 }}>
        <h2 style={{ color:'white', textAlign:'center', marginBottom:16 }}>Photo Gallery</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:8, marginBottom:20 }}>
          {availablePhotos.map((photo) => (
            <div key={photo} style={{ position:'relative', border: selectedPhotos.includes(photo) ? '3px solid #C2FF3E' : '2px solid #333', borderRadius:10, overflow:'hidden', cursor:'pointer' }} onClick={() => togglePhoto(photo)}>
              <img src={photo} alt="gallery" style={{ width:'100%', height:90, objectFit:'cover', opacity: selectedPhotos.includes(photo) ? 1 : 0.7 }} />
              {selectedPhotos.includes(photo) && (
                <div style={{ position:'absolute', top:6, right:6, background:'#C2FF3E', borderRadius:'50%', width:18, height:18, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'bold', fontSize:13 }}>✓</div>
              )}
            </div>
          ))}
        </div>
        <div style={{ display:'flex', justifyContent:'space-between' }}>
          <button onClick={onClose} style={{ background:'#FF5A7D', color:'white', border:'none', borderRadius:8, padding:'8px 20px', fontWeight:'bold', fontSize:16 }}>Cancel</button>
          <button onClick={onDone} style={{ background:'#C2FF3E', color:'#18162A', border:'none', borderRadius:8, padding:'8px 20px', fontWeight:'bold', fontSize:16 }}>Done</button>
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const router = useRouter();

  const initialHighlightTags = [
    { id: 1, text: 'She/her', active: true },
    { id: 2, text: 'English', active: true },
    { id: 3, text: 'ESTP', active: true },
    { id: 4, text: 'Casual listener', active: true },
    { id: 5, text: 'Night owl', active: true },
    { id: 6, text: 'Going with the flow', active: true },
  ];

  const [highlightTags, setHighlightTags] = useState(initialHighlightTags);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTags, setModalTags] = useState(highlightTags);

  // Note modal state
  const [note, setNote] = useState("I'm going to BlackPink on 22th at 6pm with my sister!");
  const [noteModalOpen, setNoteModalOpen] = useState(false);
  const [noteDraft, setNoteDraft] = useState(note);

  // Bio state
  const [bio, setBio] = useState("Hi! My name is Richelle, I love music and I love meeting new people!!");
  const [bioModalOpen, setBioModalOpen] = useState(false);
  const [bioDraft, setBioDraft] = useState(bio);

  // Photos state
  const placeholderPhotos = [
    '/photos/profile_picture.jpg',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400',
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=400',
    'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=400&h=400',
    'https://images.unsplash.com/photo-1519340333755-c190485c5a64?auto=format&fit=facearea&w=400&h=400',
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=facearea&w=400&h=400',
  ];
  const [selectedPhotos, setSelectedPhotos] = useState([
    '/photos/profile_picture.jpg',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400',
  ]);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);

  const openModal = () => {
    setModalTags(highlightTags);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleToggleTag = idx => {
    setModalTags(tags =>
      tags.map((tag, i) =>
        i === idx ? { ...tag, active: !tag.active } : tag
      )
    );
  };
  const handleDone = () => {
    setHighlightTags(modalTags);
    setModalOpen(false);
  };

  // Note modal handlers
  const openNoteModal = () => {
    setNoteDraft(note);
    setNoteModalOpen(true);
  };
  const closeNoteModal = () => setNoteModalOpen(false);
  const saveNote = () => {
    setNote(noteDraft);
    setNoteModalOpen(false);
  };

  // Bio handlers
  const openBioModal = () => { setBioDraft(bio); setBioModalOpen(true); };
  const closeBioModal = () => setBioModalOpen(false);
  const saveBio = () => { setBio(bioDraft); setBioModalOpen(false); };

  const handleRemovePhoto = (photo) => {
    setSelectedPhotos((prev) => prev.filter((p) => p !== photo));
  };
  const handleOpenPhotoModal = () => setPhotoModalOpen(true);
  const handleClosePhotoModal = () => setPhotoModalOpen(false);
  const handleDonePhotoModal = () => setPhotoModalOpen(false);

  return (
    <div className={styles.page}>

        <div className={styles.logoRow}>
          <Image src="/logos/linko_primarylogo.svg" alt="Linko logo" width={130} height={30} className={styles.logo} />
          <div className={styles.settingsButton}>
          <Button
            buttonText={<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.1249 0H11.8736L10.9271 4.70836C10.1434 5.05754 9.39814 5.4865 8.70333 5.98836L4.12417 4.448L0 11.552L3.62968 14.7229C3.54203 15.5721 3.54203 16.4279 3.62968 17.2771L0 20.448L4.12563 27.552L8.70333 26.0131C9.39386 26.5105 10.1371 26.9411 10.9271 27.2916L11.8736 32H20.1249L21.0715 27.2916C21.8552 26.9425 22.6004 26.5135 23.2952 26.0116L27.8744 27.552L32 20.448L28.3689 17.2771C28.4565 16.4279 28.4565 15.5721 28.3689 14.7229L31.9985 11.552L27.8729 4.448L23.2967 5.98691C22.6018 5.48555 21.8566 5.05708 21.0729 4.70836L20.1249 0ZM15.9993 21.8182C14.4472 21.8182 12.9588 21.2052 11.8613 20.1141C10.7638 19.023 10.1473 17.5431 10.1473 16C10.1473 14.4569 10.7638 12.977 11.8613 11.8859C12.9588 10.7948 14.4472 10.1818 15.9993 10.1818C17.5513 10.1818 19.0398 10.7948 20.1372 11.8859C21.2347 12.977 21.8512 14.4569 21.8512 16C21.8512 17.5431 21.2347 19.023 20.1372 20.1141C19.0398 21.2052 17.5513 21.8182 15.9993 21.8182Z" fill="#C2FF3E"/>
              </svg>}
            onClick={()=>router.push("/profile/settings")}
            type="transparent_greentxt"
            size="small_round"
          />
          </div>
        </div>
        <div className={styles.profilePicWrapper}>
          <Image src="/photos/profile_picture.jpg" alt="Profile picture" width={419} height={314} className={styles.profilePic} />
          <div className={styles.editPictureButton}>
          <Button
            buttonText={<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group">
              <circle id="Ellipse 74" cx="27.125" cy="27.125" r="27.125" fill="#0B0A17"/>
              <path id="Vector" d="M19.25 19.25H17.5C16.5717 19.25 15.6815 19.6187 15.0251 20.2751C14.3687 20.9315 14 21.8217 14 22.75V38.5C14 39.4283 14.3687 40.3185 15.0251 40.9749C15.6815 41.6313 16.5717 42 17.5 42H33.25C34.1783 42 35.0685 41.6313 35.7249 40.9749C36.3813 40.3185 36.75 39.4283 36.75 38.5V36.75" stroke="#C2FF3E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path id="Vector_2" d="M35 15.7499L40.25 20.9999M42.6737 18.5237C43.363 17.8345 43.7502 16.8997 43.7502 15.9249C43.7502 14.9502 43.363 14.0154 42.6737 13.3262C41.9845 12.637 41.0497 12.2498 40.075 12.2498C39.1003 12.2498 38.1655 12.637 37.4763 13.3262L22.75 27.9999V33.2499H28L42.6737 18.5237Z" stroke="#C2FF3E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              </svg>}
            onClick={()=>router.push("/profile/settings")}                    /*PLACEHOLDER FOR MODAL*/
            type="dark_purple"
            size="big_round"
          />
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.name}>Richelle <span className={styles.age}>21</span></h2>
          <div className={styles.location}>Vancouver, BC</div>
        </div>
        <section className={styles.section}> 
          <h3 className={styles.sectionTitle}>Note</h3>     
          <div className={styles.noteSectionGap}>
            <Container
              text={note}
              color="darkPurple"
              size="small"
              border={true}
              textStyle="Regular"
            />
          </div>
          <Button 
            buttonText="Edit" 
            onClick={openNoteModal}
            type="dark_purple" 
            size="long" 
            border="green_border"
          />
           <TextEditModal 
            isOpen={noteModalOpen} 
            onClose={closeNoteModal} 
            title="Edit Note"
            value={noteDraft}
            setValue={setNoteDraft}
            onDone={saveNote}
            placeholder="Enter your note..."
        />
        </section>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Highlights</h3>
          <div className={styles.tagsRow}>
            {highlightTags.filter(tag => tag.active).map((tag, idx) => (
              <Button
                key={tag.id}
                buttonText={tag.text}
                type={idx % 2 === 0 ? 'green' : 'light_purple'}
                size="small_pill"
                onClick={() => {}}
              />
            ))}
          </div>
          <Button 
            buttonText="Edit" 
            type="dark_purple" 
            size="long" 
            border="green_border" 
            onClick={openModal} 
          />
        </section>
     
      

      {/* Bio Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Bio</h3>
        <div className={styles.noteSectionGap}>
            <Container
              text={bio}
              color="darkPurple"
              size="small"
              border={false}
              textStyle="Regular"
            />
        </div>
          <Button 
            buttonText="Edit" 
            onClick={openBioModal}
            type="dark_purple" 
            size="long" 
            border="green_border"
          />
          <TextEditModal 
            isOpen={bioModalOpen} 
            onClose={closeBioModal} 
            title="Edit Bio"
            value={bioDraft}
            setValue={setBioDraft}
            onDone={saveBio}
            placeholder="Enter your bio..."
      />
      </section>

      {/* Photos Section */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Photos</h3>
        <div className={styles.photosGrid} style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12, marginBottom:18 }}>
          {selectedPhotos.map((photo, idx) => (
            <div key={photo} style={{ position:'relative', borderRadius:16, overflow:'hidden', background:'#222', aspectRatio:'1/1' }}>
              <img src={photo} alt={`Photo ${idx+1}`} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              <button onClick={() => handleRemovePhoto(photo)} style={{ position:'absolute', top:8, right:8, background:'#FF5A7D', color:'white', border:'none', borderRadius:'50%', width:28, height:28, fontSize:20, fontWeight:'bold', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', zIndex:2 }}>-</button>
            </div>
          ))}
        </div>
        <div style={{ display:'flex', justifyContent:'center', marginBottom:8 }}>
          <button onClick={handleOpenPhotoModal} style={{ width:60, height:60, borderRadius:'50%', background:'#18162A', border:'2px solid #C2FF3E', color:'#C2FF3E', fontSize:40, fontWeight:'bold', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>+</button>
        </div>
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
      <NavigationBar />
     
     
     
     {modalOpen && (
       <TagsModal
         tags={modalTags}
         onToggleTag={handleToggleTag}
         onCancel={closeModal}
         onDone={handleDone}
         title="Choose what you want visible on your profile!"
       />
     )}
     <PhotoGalleryModal
       isOpen={photoModalOpen}
       onClose={handleClosePhotoModal}
       onDone={handleDonePhotoModal}
       availablePhotos={placeholderPhotos}
       selectedPhotos={selectedPhotos}
       setSelectedPhotos={setSelectedPhotos}
     />
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