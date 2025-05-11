import React from 'react';
import styles from '../styles/SkillsCategories.module.css';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiChakraui, SiJest, SiTestinglibrary } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

export default function SkillsCategories() {
    return (
        <div className={styles.skills}>
            <div className={styles.skillsCategories}>
                <h3>Core Web Technologies</h3>
                    <ul>
                        <li>HTML <FaHtml5 className={styles.icons} /></li>
                        <li>CSS <FaCss3Alt className={styles.icons} /></li>
                        <li>JavaScript <SiJavascript className={styles.icons} /></li>
                        <li>TypeScript <SiTypescript className={styles.icons} /></li>
                    </ul>
            </div>
            <div className={styles.skillsCategories}>
                <h3>Frameworks & Libraries</h3>
                    <ul>
                        <li>React <FaReact className={styles.icons} /></li>
                        <li>Next.js <RiNextjsFill className={styles.icons} /></li>
                        <li>Chakra UI <SiChakraui className={styles.icons} /></li>
                    </ul>
            </div>
            <div className={styles.skillsCategories}>
                <h3>Testing</h3>
                    <ul>
                        <li>Jest <SiJest className={styles.icons}/></li>
                        <li>React Testing Library <SiTestinglibrary className={styles.icons}/></li>
                    </ul>
            </div>
        </div>
    )
}
