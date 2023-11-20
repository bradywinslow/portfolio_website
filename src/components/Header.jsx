import React from 'react';
import styles from '../styles/Header.module.css';
import NavMenuItems from '../components/NavMenuItems.jsx';
import Contact from '../components/Contact.jsx';

export default function Header() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navContainer}>
                <div className={styles.navItems}>
                    <a className={styles.logo} href="./">BRADY WINSLOW</a>
                    <NavMenuItems />
                </div>
                <Contact />
            </div>
        </nav>
    );
}
