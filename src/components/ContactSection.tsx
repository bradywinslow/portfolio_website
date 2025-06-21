import styles from '../styles/ContactSection.module.css';
import ContactForm from './ContactForm';
import ContactIcons from './ContactIcons';

export default function ContactSection() {
    return (
        <div className={styles.contactSection}>
                <div className={styles.contactForm}>
                    <ContactForm />
                </div>
                <div className={styles.contactIcons}>
                    <ContactIcons />
                </div>
        </div>
    )
}
