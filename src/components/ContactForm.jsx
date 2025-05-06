import React from 'react';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
    return (
        <div className={styles.contactFormContainer}>
            <article className={styles.contactForm}>
                <p>Reach out if you have any questions, feedback, or if you're interested in collaborating.</p>
                <form className={styles.formFields}>
                    <div className={styles.nameEmailFields}>
                        <div className={styles.nameField}>
                            <label for='name'></label>
                            <input
                                className={styles.contactFormInputFields}
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Name'
                                required
                            />
                        </div>
                        <div className={styles.emailField}>
                            <label for='email'></label>
                            <input
                                className={styles.contactFormInputFields}
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Email'
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.contactFormMessageContainer}>
                        <label for='message'></label>
                        <textarea
                            className={styles.contactFormMessage}
                            name='message'
                            required
                            id='message'
                            placeholder='Message'
                            rows='5'
                            form='contactForm'
                            spellcheck
                            wrap='hard'
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className={styles.sendButton}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </article>
        </div>
    )
}
