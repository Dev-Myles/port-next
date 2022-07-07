import ContactForm from '../contact/ContactForm';
import AboutMe from '../introduction/AboutMe';
import MyTech from '../introduction/MyTech';

import ProjectGallery from '../projects/ProjectGallery';
import styles from './contents.module.css';

export default function Contents({ fn, project, fn2, tab }) {
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
            onClick={() => fn2(1)}
            style={tab == 1 ? tabStyle : null}
          >
            <span>Projects</span>
          </div>
          <div
            className={styles.sliceWrap}
            id={styles.slice2}
            onClick={() => fn2(2)}
            style={tab == 2 ? tabStyle : null}
          >
            <span>Skills</span>
          </div>

          <div
            className={styles.sliceWrap}
            id={styles.slice3}
            onClick={() => fn2(3)}
            style={tab == 3 ? tabStyle : null}
          >
            <span>About</span>
          </div>
          <div
            className={styles.sliceWrap}
            id={styles.slice4}
            onClick={() => fn2(4)}
            style={tab == 4 ? tabStyle : null}
          >
            <span>Contact</span>
          </div>
        </div>
        <div className={styles.folderBody}>
          {tab == 1 ? (
            <ProjectGallery project={project} fn={fn} />
          ) : tab == 2 ? (
            <MyTech />
          ) : tab == 3 ? (
            <AboutMe />
          ) : tab == 4 ? (
            <ContactForm />
          ) : null}
        </div>
      </div>
    </>
  );
}
