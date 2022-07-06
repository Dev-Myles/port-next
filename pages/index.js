import { useState } from 'react';
import { Element, scroller } from 'react-scroll';
import Contents from '../components/contents/Contents';
import IntroHeader from '../components/introduction/IntroHeader';

export default function Mainpage() {
  const [isProject, setProject] = useState(0);
  const [isSelected, setSelected] = useState(1);

  function galleryClick(direction) {
    if (direction && isProject < 2) {
      setProject(isProject + 1);
    } else if (!direction && isProject > 0) {
      setProject(isProject - 1);
    } else {
      null;
    }
  }

  function setTab(tab) {
    return setSelected(tab);
  }

  function headerButtons(tab) {
    setSelected(tab);
    scroller.scrollTo('folder', {
      duration: 1500,
      delay: 50,
      smooth: true,
    });
  }

  return (
    <>
      <IntroHeader fn={headerButtons} />
      <Element name="folder">
        <Contents
          fn={galleryClick}
          project={isProject}
          fn2={setTab}
          tab={isSelected}
        />
      </Element>
    </>
  );
}
