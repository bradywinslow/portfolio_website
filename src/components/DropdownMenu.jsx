import React, { useState } from 'react';
import { navMenu } from '../constants/global.js';

export default function DropdownMenu() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <button onClick={toggle} className={styles.floatingBtn}>
                <FontAwesomeIcon icon={faBars} className={styles.floatingBtnIcon}/>
            </button>
            <div>

                <button>
                    <FontAwesomeIcon icon={faTimes} className={styles.faTimesBtnIcon}/>
                </button>

                <ul className={styles.curtainMenuNavItems}>
                    {navMenu.map((item) => (
                        <a href={item.href}>
                            {item.name}
                        </a>
                    ))}
                </ul>
            </div>
        </>
    )
}