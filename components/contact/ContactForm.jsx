import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IconContext } from 'react-icons';
import { TiDeleteOutline } from 'react-icons/ti';
import styles from './contactform.module.css';

const CopyButton = dynamic(() => import('./CopyButton'), {
  ssr: false,
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmited, setSubmited] = useState(true);

  const formSubmit = async (data, e) => {
    try {
      e.preventDefault();

      e.target.reset();
      const JSONDATA = JSON.stringify(data);

      return console.log(JSONDATA);
    } catch (error) {
      console.log(error);
    }
  };

  function deleteFlash() {
    console.log(isSubmited);
    return setSubmited(false);
  }

  function FlashMessage({ status, fn }) {
    const message =
      status == 200 ? 'Message has been sent!' : 'Error sending message.';

    const styling = {
      backgroundColor: status == 200 ? '#C2E1B1' : '#BF663F',
      color: status == 200 ? 'var(--success-text)' : 'var(--error-text)',
    };

    return (
      <div className={styles.fadeWrap}>
        <div className={styles.postionWrap}>
          <div className={styles.flashMessage} style={styling}>
            <span>{message}</span>
            <IconContext.Provider value={{ size: '1.6em' }}>
              <TiDeleteOutline onClick={fn} />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.fadeWrap}>
      <CopyButton />
      {isSubmited == true ? (
        <FlashMessage status={200} fn={deleteFlash} />
      ) : null}
      <form className={styles.formBody} onSubmit={handleSubmit(formSubmit)}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            {...register('firstName', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 22,
            })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email@email.com"
            {...register('email', {
              maxLength: 30,
              required: true,
              pattern:
                /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
            })}
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            name="company"
            placeholder="Who you represent"
            {...register('company', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 22,
            })}
          />
        </label>
        <label>
          Message:
          <textarea
            placeholder="Hello! I would like to..."
            {...register('message', {
              required: true,
              maxLength: 1000,
              pattern: /^[a-zA-Z\s]*$/g,
            })}
          />
        </label>
        <button className={styles.subButton} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
