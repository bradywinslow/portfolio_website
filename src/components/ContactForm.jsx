import React from 'react';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
    return (
        <div className={styles.contactFormContainer}>
            <article className={styles.contactForm}>
                <p>Reach out if you have any questions, feedback, or if you're interested in collaborating.</p>
                <form
                    className={styles.formFields}
                    name='contact'
                    method='POST'
                >
                    <div className={styles.nameEmailFields}>
                        <div className={styles.nameField}>
                        <input type='hidden' name='form-name' value='contact' />
                            <label className={styles.formLabels} for='name'>Name</label>
                            <input
                                className={styles.contactFormInputFields}
                                type='text'
                                name='name'
                                id='name'
                                required
                            />
                        </div>
                        <div className={styles.emailField}>
                            <label className={styles.formLabels} for='email'>Email</label>
                            <input
                                className={styles.contactFormInputFields}
                                type='email'
                                name='email'
                                id='email'
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.contactFormMessageContainer}>
                        <label className={styles.formLabels} for='message'>Message</label>
                        <textarea
                            className={styles.contactFormMessage}
                            name='message'
                            required
                            id='message'
                            rows='5'
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
