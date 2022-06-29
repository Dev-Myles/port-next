import { useState } from 'react';
import styles from './projectgallery.module.css';

export default function ProjectGallery() {
  const [isSelected, setSelected] = useState(null);

  return <div className={styles.projectGalleryWrap}></div>;
}
