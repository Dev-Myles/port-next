import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import styles from './navbar.module.css';
export default function Navbar() {
  return (
    <div className={styles.navbarWrap}>
      <div className={styles.imageWrap}>
        {' '}
        <Image
          src={'/images/lion-background.svg'}
          alt=""
          width="4"
          height="3"
          sizes="2vh"
          layout="responsive"
        />
      </div>
      <div className={styles.linkWrap}>
        <div className={styles.link}>
          <span>Dev-Myles</span>
        </div>
        <a href="https://github.com/Dev-Myles">
          <div className={styles.link}>
            <span>GitHub</span>
            <AiFillGithub />
          </div>
        </a>
      </div>
    </div>
  );
}
