import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import { navMenu } from '../constants/global.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <a className={styles.logo} href="./">BRADY WINSLOW</a>
                </div>
                <div className={styles.navMenuItemsContainer}>
                    <ul className={`${styles.ul} ${isOpen ? styles.dropdownOpen : ''}`}>
                        {navMenu.map((item) => (
                            <a href={item.href} onClick={toggle}>
                                {item.name}
                            </a>
                        ))}
                    </ul>
                </div>
                <div className={`${styles.faBtnIcons} ${isOpen ? styles.closeIcon : ''}`} onClick={toggle}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </div>
            </div>
        </nav>
    );
}
