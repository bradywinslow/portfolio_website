import React from 'react';
import styles from '../styles/ContactSection.module.css';
import ContactForm from '../components/ContactForm.jsx';
import ContactIcons from '../components/ContactIcons.jsx';

export default function ContactSection() {
    return (
        <div className={styles.contactSection}>
            <h2 className={styles.contactSectionHeading}>Contact</h2>
                <div className={styles.contactForm}>
                    <ContactForm />
                </div>
                <div className={styles.contactIcons}>
                    <ContactIcons />
                </div>
        </div>
    )
}
