import Image from 'next/image';
import styles from './introheader.module.css';

export default function IntroHeader({ fn }) {
  return (
    <div className={styles.introHeader}>
      <div className={styles.sayingP}>
        <p>Self-taught. Self-disciplined. Self-motivated.</p>
      </div>
      <div>
        <p className={styles.welcomeP}>
          Building my <span className={styles.greenWord}>future</span> one line
          at a time, <br /> I can help
          <span className={styles.greenWord}>you</span> along the way.
        </p>
        <div className={styles.buttonWrap}>
          <button onClick={() => fn(1)} className={styles.buttons}>
            Projects
          </button>
          <button onClick={() => fn(4)} className={styles.buttons}>
            Contact
          </button>
        </div>
      </div>
      <div className={styles.borderBottom}>
        <div className={styles.imageWrap}>
          <Image
            src={'/images/header-chain.svg'}
            alt="Header border"
            layout="responsive"
            width="10"
            height="1"
            sizes="10vh"
          />
        </div>
        <div className={styles.imageWrap}>
          <Image
            src={'/images/header-chain.svg'}
            alt="Header border"
            layout="responsive"
            width="10"
            height="1"
            sizes="2vh"
          />
        </div>
        <div className={styles.imageWrap}>
          <Image
            src={'/images/header-chain.svg'}
            alt="Header border"
            layout="responsive"
            width="10"
            height="1"
            sizes="2vh"
          />
        </div>
      </div>
    </div>
  );
}
