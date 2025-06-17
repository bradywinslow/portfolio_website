import styles from '../styles/ContactForm.module.css';
import Button from './Button';

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
                            <label className={styles.formLabels} htmlFor='name'>Name</label>
                            <input
                                className={styles.contactFormInputFields}
                                type='text'
                                name='name'
                                id='name'
                                required
                            />
                        </div>
                        <div className={styles.emailField}>
                            <label className={styles.formLabels} htmlFor='email'>Email</label>
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
                        <label className={styles.formLabels} htmlFor='message'>Message</label>
                        <textarea
                            className={styles.contactFormInputFields}
                            name='message'
                            required
                            id='message'
                            rows={5}
                            spellCheck
                            wrap='hard'
                        ></textarea>
                    </div>
                    <div>
                        <Button
                            type='submit'
                        >
                            Send
                        </Button>
                    </div>
                </form>
            </article>
        </div>
    )
}
