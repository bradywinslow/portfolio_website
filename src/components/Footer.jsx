import React from 'react';
import styles from '../styles/Footer.module.css';
import Contact from '../components/Contact.jsx';

export default function Footer() {
    return (
        <div className={styles.footerDivStyles}>
            <div className={styles.contactIcons}>
                <Contact />
            </div>
            <div className={styles.p}>
                <p>&copy; 2023-2024 Brady Winslow. All Rights Reserved.</p>
            </div>
        </div>
    );
}
