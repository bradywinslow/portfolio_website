import React from 'react';
import styles from '../styles/NavMenuItems.module.css';
import { navMenu } from '../constants/global.js';

export default function NavMenuItems() {    
    return (
        <ul className={styles.ul}>
            {navMenu.map((item) => (
                <a href={item.href}>
                    {item.name}
                </a>
            ))}
        </ul>
    )
}
