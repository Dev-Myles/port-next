import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './contactform.module.css';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmited, setSubmited] = useState(false);

  return (
    <div className={styles.fadeWrap}>
      <form className={styles.formBody} onSubmit={() => {}}>
        <label>
          First Name:
          <input type="text" name="firstName" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Company:
          <input type="text" name="company" />
        </label>
        <label>
          Message:
          <textarea />
        </label>
      </form>
    </div>
  );
}
