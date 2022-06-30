import { AiFillApple, AiFillWindows } from 'react-icons/ai';
import { DiDebian } from 'react-icons/di';
import styles from './aboutme.module.css';

export default function AboutMe() {
  return (
    <div className={styles.fadeWrap}>
      <span>Hey there!</span>
      <p>
        I&apos;m Myles. I&apos;m a self-taught web developer from Iowa who
        enjoys working on web projects. I am looking for full-time employment to
        grow my skills!
      </p>
      <span id={styles.osHeader}>My OS&apos;s</span>
      <ul>
        <li>
          Windows 10
          <span>
            <AiFillWindows />
          </span>
        </li>
        <li>
          macOS
          <span>
            <AiFillApple />
          </span>
        </li>
        <li>
          Debian GNU/Linux
          <span>
            <DiDebian />
          </span>
        </li>
      </ul>
    </div>
  );
}
