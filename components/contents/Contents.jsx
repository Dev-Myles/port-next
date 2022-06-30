import { useState } from 'react';
import ContactForm from '../contact/ContactForm';
import AboutMe from '../introduction/AboutMe';
import MyTech from '../introduction/MyTech';
import ProjectGallery from '../projects/ProjectGallery';
import styles from './contents.module.css';

export default function Contents() {
  const [isSelected, setSelected] = useState(1);
  const tabStyle = {
    transform: 'translateY(0.5vw)',
    position: 'relative',
    cursor: 'pointer',
    zIndex: 10,
    color: 'var(--accent-color)',
  };
  return (
    <>
      <div className={styles.folderHeader}>
        <span>Flip through my folder!</span>
      </div>
      <div className={styles.folder}>
        <div className={styles.contentsWrap}>
          <div
            className={styles.sliceWrap}
            id={styles.slice1}
            onClick={() => setSelected(1)}
            style={isSelected == 1 ? tabStyle : null}
          >
            <span>Projects</span>
          </div>
          <div
            className={styles.sliceWrap}
            id={styles.slice2}
            onClick={() => setSelected(2)}
            style={isSelected == 2 ? tabStyle : null}
          >
            <span>Skills</span>
          </div>

          <div
            className={styles.sliceWrap}
            id={styles.slice3}
            onClick={() => setSelected(3)}
            style={isSelected == 3 ? tabStyle : null}
          >
            <span>About</span>
          </div>
          <div
            className={styles.sliceWrap}
            id={styles.slice4}
            onClick={() => setSelected(4)}
            style={isSelected == 4 ? tabStyle : null}
          >
            <span>Contact</span>
          </div>
        </div>
        <div className={styles.folderBody}>
          {isSelected == 1 ? (
            <ProjectGallery />
          ) : isSelected == 2 ? (
            <MyTech />
          ) : isSelected == 3 ? (
            <AboutMe />
          ) : isSelected == 4 ? (
            <ContactForm />
          ) : null}
        </div>
      </div>
    </>
  );
}
