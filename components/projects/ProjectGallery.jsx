import { IconContext } from 'react-icons';
import { MdNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { projects } from '../../lib/projectInfo/projectInfo';
import ProjectCard from './ProjectCard';
import styles from './projectgallery.module.css';

export default function ProjectGallery({ project, fn }) {
  const { name, desc, video, liveLink, codeBase } = projects[project];

  const galleryNodes = [...Array(projects.length).keys()];

  const selectedStyle = {
    backgroundColor: 'var(--accent-color)',
    border: 'none',
  };

  const nonSelectedStyle = {
    backgroundColor: 'inherit',
    border: '1px solid var(--font-color)',
  };

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
            fn(false);
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
              style={i == project ? selectedStyle : nonSelectedStyle}
            ></div>
          );
        })}

        <button
          className={styles.buttons}
          onClick={() => {
            fn(true);
          }}
        >
          <IconContext.Provider value={{ color: 'var(--font-color)' }}>
            <MdNavigateNext />
          </IconContext.Provider>
        </button>
      </div>
      <div className={styles.galleryRatio}>
        <span>{`${project + 1}|${projects.length}`}</span>
      </div>
    </div>
  );
}
