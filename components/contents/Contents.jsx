import styles from './contents.module.css';

export default function Contents() {
  return (
    <div className={styles.folder}>
      <div className={styles.contentsWrap}>
        <div className={styles.sliceWrap} id={styles.slice1}>
          <span>Projects</span>
        </div>
        <div className={styles.sliceWrap} id={styles.slice2}>
          <span>Experience</span>
        </div>

        <div className={styles.sliceWrap} id={styles.slice3}>
          <span>About Me</span>
        </div>
        <div className={styles.sliceWrap} id={styles.slice4}>
          <span>Contact</span>
        </div>
      </div>
      <div className={styles.folderBody}>
        <span>content</span>
      </div>
    </div>
  );
}
