import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import styles from './layout.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/Dev-Myles">
        <IconContext.Provider value={{ size: '3em' }}>
          <AiFillGithub />
        </IconContext.Provider>
      </a>
      <span>GitHub</span>
    </div>
  );
}
