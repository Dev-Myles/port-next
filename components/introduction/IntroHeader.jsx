import Image from 'next/image';
import styles from './introheader.module.css';

export default function IntroHeader() {
  return (
    <div className={styles.introHeader}>
      <div className={styles.sayingP}>
        <p>Self-taught. Self-disciplined. Self-motivated.</p>
      </div>
      <div>
        <p className={styles.welcomeP}>
          Building my <span className={styles.greenWord}>future</span> one line
          of code at a time, <br /> I can help{' '}
          <span className={styles.greenWord}>you</span> along the way.
        </p>
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
