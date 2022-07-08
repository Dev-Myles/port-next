import { useState } from 'react';
import { AiOutlineCopy } from 'react-icons/ai';
import { Transition } from 'react-transition-group';
import styles from './copybutton.module.css';

export default function CopyButton() {
  const [inProps, setProps] = useState(false);

  const defaultStyle = {
    fontSize: '22px',
    transition: `ease-in-out 1s`,

    opacity: 0,
    color: 'var(--accent-color)',
  };

  const transitionStyles = {
    entering: { opacity: 0, transform: 'translateY(-5px)' },
    entered: { opacity: 1, transform: 'translateY(-10px)' },
    exiting: { opacity: 0.5, transform: 'translateY(-10px)' },
    exited: { opacity: 0, transform: 'translateY(-5px)' },
  };

  return (
    <div
      className={styles.copyWrap}
      onClick={() => {
        navigator.clipboard.writeText('mylessworkemail@gmail.com');
        setProps(true);
        setTimeout(() => {
          setProps(false);
        }, 1500);
      }}
    >
      <span>Copy Email</span>
      <AiOutlineCopy />

      <Transition in={inProps} timeout={0}>
        {(state) => (
          <span style={{ ...defaultStyle, ...transitionStyles[state] }}>
            Copied!
          </span>
        )}
      </Transition>
    </div>
  );
}
