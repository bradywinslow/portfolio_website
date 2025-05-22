import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Header.module.css';
import { navMenu } from '../constants/navMenu.js';
import { FaBars, FaTimes } from "react-icons/fa";

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
                    <a className={styles.logo} href='#top'>
                        <img className={styles.logoImage} src='../logo500.webp' width='48' height='48' alt='logo' />
                        <p>BRADY WINSLOW</p>
                    </a>
                </div>
                <div className={styles.navMenuItemsContainer} ref={menuRef}>
                    <ul className={`${styles.ul} ${isOpen ? styles.dropdownOpen : ''}`}>
                        {navMenu.map((item) => (
                            <li key={item.id} onClick={toggle}>
                                <a href={item.href}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`${styles.faBtnIcons} ${isOpen ? styles.closeIcon : styles.openIcon}`} onClick={toggle}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
}
