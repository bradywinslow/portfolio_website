import React from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CurtainMenu from '../components/CurtainMenu.js';

const navMenu = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
];

export default function Header() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navItems}>
                <a className={styles.logo} href="./">Brady Winslow</a>
                <ul className={styles.ul}>
                    {navMenu.map((item) => (
                        <a 
                            href={item.href}
                        >
                            {item.name}
                        </a>
                    ))}
                </ul>
            </div>
            <div className={styles.contact}>
                <p>Contact: </p>
                <a className={styles.FontAwesomeIcon} href="https://www.linkedin.com/in/brady-winslow/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className={styles.FontAwesomeIcon} href="https://github.com/bradywinslow" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className={styles.FontAwesomeIcon} href="mailto:brady.winslow@gmail.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <CurtainMenu />
            </div>
        </nav>
    );
}
