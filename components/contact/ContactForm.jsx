import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IconContext } from 'react-icons';
import { TiDeleteOutline } from 'react-icons/ti';
import styles from './contactform.module.css';
import LoadingGif from './LoadingGif';

const CopyButton = dynamic(() => import('./CopyButton'), {
  ssr: false,
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmited, setSubmited] = useState(undefined);
  const [isLoading, setLoading] = useState(false);

  const formSubmit = async (data, e) => {
    try {
      e.preventDefault();
      setLoading(true);
      e.target.reset();
      const JSONDATA = JSON.stringify(data);

      const endPoint = '/api/sendmessage';
      const action = 'POST';
      const options = {
        method: action,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONDATA,
      };

      const response = await fetch(endPoint, options);
      const res = await response.json();
      setLoading(false);
      return setSubmited({ status: res.status, message: res.message });
    } catch (error) {
      console.log(error);
    }
  };

  function deleteFlash() {
    console.log(isSubmited);
    return setSubmited(null);
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
      <div className={styles.header}>
        <span>Message Me!</span>
      </div>
      <div className={styles.bodyWrap}>
        <div className={styles.imageWrap}>
          <Image
            alt="Contact form picture"
            width={1}
            height={1}
            sizes="10vw"
            layout="responsive"
            src="/images/greetings-banner-pic.svg"
          />
          <CopyButton />
          <p>
            Fill out the contact form or copy my email and use your favorite
            mailbox!
          </p>
        </div>

        <form className={styles.formBody} onSubmit={handleSubmit(formSubmit)}>
          {isLoading == true ? <LoadingGif /> : null}

          {isSubmited == undefined ? null : (
            <FlashMessage status={isSubmited.status} fn={deleteFlash} />
          )}
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
          {errors.firstName && (
            <span className={styles.errorMessage}>
              Please enter a valid first name.
            </span>
          )}
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
          {errors.email && (
            <span className={styles.errorMessage}>
              Please enter a valid email.
            </span>
          )}
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
          {errors.company && (
            <span className={styles.errorMessage}>
              Please enter a valid company name.
            </span>
          )}
          {errors.message && (
            <span className={styles.errorMessage}>
              Please enter a valid message.
            </span>
          )}
          <label>
            Message:
            <textarea
              placeholder="Hello! I would like to..."
              {...register('message', {
                required: true,
                maxLength: 1000,
                pattern: /^[A-Za-z0-9 _.,!"'/$]*$/g,
              })}
            />
          </label>
          <button className={styles.subButton} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
