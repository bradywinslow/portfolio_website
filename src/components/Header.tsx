import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Header.module.css';
import { navMenu } from '../constants/navMenu';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    let menuRef = useRef<HTMLDivElement | null>(null);

    const toggle = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        let handler = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                !target.classList.contains(styles.faBtnIcons)
            ) {
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
                    <Link className={styles.logo} to='/'>
                        <img className={styles.logoImage} src='../logo500.webp' width='48' height='48' alt='logo' />
                        <p>BRADY WINSLOW</p>
                    </Link>
                </div>
                <div className={styles.navMenuItems}>
                    <div className={styles.navMenuItemsContainer} ref={menuRef}>
                        <ul className={`${styles.ul} ${isOpen ? styles.dropdownOpen : ''}`}>
                            {navMenu.map((item) => (
                                <li key={item.id} onClick={toggle}>
                                    <Link to={item.to}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`${styles.faBtnIcons} ${isOpen ? styles.closeIcon : styles.openIcon}`} onClick={toggle}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </nav>
    );
}
