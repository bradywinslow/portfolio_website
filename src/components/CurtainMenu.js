import React, { useState } from 'react';
import styles from '../styles/CurtainMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const curtainMenuNav = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
];

export default function CurtainMenu() {
    const [open, setOpen] = useState(false);
    
    const toggle = () => {
        setOpen((prevState) => !prevState);
    };

    const handleLinkClick = () => {
        setOpen(false);
    }

    return (
        <>
            <button onClick={toggle} className={styles.floatingBtn}>
                <FontAwesomeIcon icon={faBars} className={styles.floatingBtnIcon}/>
            </button>
            <div className={`${styles.curtainMenu} ${open && styles.open}`}>

                <button onClick={toggle} className={styles.closeCurtain}>
                    <FontAwesomeIcon icon={faTimes} className={styles.faTimesBtnIcon}/>
                </button>

                <ul className={styles.curtainMenuNavItems}>
                    {curtainMenuNav.map((item) => (
                        <a href={item.href} onClick={handleLinkClick}>
                            {item.name}
                        </a>
                    ))}
                </ul>
            </div>
        </>        
    );
}
