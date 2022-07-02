import { DiCodeBadge } from 'react-icons/di';
import { MdOutlineLiveTv } from 'react-icons/md';
import styles from './projectcard.module.css';

export default function ProjectCard({ name, desc, video, liveLink, codeBase }) {
  return (
    <div>
      <h1>{name}</h1>
      <div className={styles.videoWrap}>
        <video playsinline controls className={styles.video}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <p>{desc}</p>
      <div className={styles.buttonWrap}>
        <div className={styles.buttons}>
          <a href={liveLink}>
            LIVE
            <MdOutlineLiveTv />
          </a>
        </div>
        <div className={styles.buttons}>
          <a href={codeBase}>
            Repo
            <DiCodeBadge />
          </a>
        </div>
      </div>
    </div>
  );
}
