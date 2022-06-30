import Image from 'next/image';
import React, { useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './mytech.module.css';

const hasWindow = () => {
  return typeof window !== 'undefined';
};

export default function MyTech() {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }

  const [isMobile, setIsMobile] = useState(false);
  const mobileDevice = useMediaQuery({ maxWidth: 999 });

  useLayoutEffect(() => {
    return mobileDevice && hasWindow ? setIsMobile(true) : setIsMobile(false);
  }, [mobileDevice]);

  return (
    <div className={styles.fadeWrap}>
      <h2 className={styles.header}>Technical Experience</h2>
      <br />
      <p className={styles.aboutTech}>
        Libraries, frameworks, and technology I&apos;ve built projects with:
      </p>
      {!isMobile ? (
        <Image
          alt="Tech Logos"
          src={'/images/tech-banner.svg'}
          height={1}
          width={3}
          layout="responsive"
        />
      ) : (
        <Image
          alt="Tech Logos"
          src={'/images/portfolio-programming-logos.svg'}
          height={1}
          width={1}
          layout="responsive"
        />
      )}
    </div>
  );
}
