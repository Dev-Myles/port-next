import { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';

import { v4 as uuidv4 } from 'uuid';
import { projects } from '../../lib/projectInfo/projectInfo';

import styles from './projectgallery.module.css';

import ProjectCard from './ProjectCard';

export default function ProjectGallery() {
  const [isProject, setProject] = useState(0);

  const { name, desc, video, liveLink, codeBase } = projects[isProject];

  const galleryNodes = [...Array(projects.length).keys()];

  const selectedStyle = {
    backgroundColor: 'var(--accent-color)',
    border: 'none',
  };

  const nonSelectedStyle = {
    backgroundColor: 'inherit',
    border: '1px solid var(--font-color)',
  };

  function galleryClick(direction) {
    if (direction && isProject < 2) {
      setProject(isProject + 1);
    } else if (!direction && isProject > 0) {
      setProject(isProject - 1);
    } else {
      null;
    }
  }

  return (
    <div className={styles.fadeWrap}>
      <ProjectCard
        key={uuidv4()}
        name={name}
        desc={desc}
        video={video}
        liveLink={liveLink}
        codeBase={codeBase}
      />

      <div className={styles.nodesWrap}>
        <button
          className={styles.buttons}
          onClick={() => {
            galleryClick(false);
          }}
        >
          <IconContext.Provider value={{ color: 'var(--font-color)' }}>
            <MdOutlineNavigateBefore />
          </IconContext.Provider>
        </button>
        {galleryNodes.map((e, i) => {
          return (
            <div
              key={uuidv4()}
              className={styles.galleryNodes}
              style={i == isProject ? selectedStyle : nonSelectedStyle}
            ></div>
          );
        })}

        <button
          className={styles.buttons}
          onClick={() => {
            galleryClick(true);
          }}
        >
          <IconContext.Provider value={{ color: 'var(--font-color)' }}>
            <MdNavigateNext />
          </IconContext.Provider>
        </button>
      </div>
      <div className={styles.galleryRatio}>
        <span>{`${isProject + 1}|${projects.length}`}</span>
      </div>
    </div>
  );
}
