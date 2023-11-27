import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Header.module.css';
import { navMenu } from '../constants/global.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    let menuRef = useRef();

    const toggle = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target) && !event.target.classList.contains(styles.faBtnIcons)) {
                setIsOpen(false);
            }
        };
        
        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        }
    });

    return (
        <nav className={styles.nav}>
            <div className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <a className={styles.logo} href="./">BRADY WINSLOW</a>
                </div>
                <div className={styles.navMenuItemsContainer} ref={menuRef}>
                    <ul className={`${styles.ul} ${isOpen ? styles.dropdownOpen : ''}`}>
                        {navMenu.map((item) => (
                            <a href={item.href} onClick={toggle}>
                                {item.name}
                            </a>
                        ))}
                    </ul>
                </div>
                <div className={`${styles.faBtnIcons} ${isOpen ? styles.closeIcon : styles.openIcon}`} onClick={toggle}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </div>
            </div>
        </nav>
    );
}
