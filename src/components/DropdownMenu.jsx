import React from 'react';
import styles from '../styles/DropdownMenu.module.css';
import NavMenuItems from './NavMenuItems.jsx';

export default function DropdownMenu() {
    return (
        <div className={styles.dropdownContainer}>
            <NavMenuItems />
        </div>
    )
}
