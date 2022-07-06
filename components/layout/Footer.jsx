import { AiFillGithub } from 'react-icons/ai';
import styles from './layout.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <AiFillGithub />
      <span>GitHub</span>
    </div>
  );
}
