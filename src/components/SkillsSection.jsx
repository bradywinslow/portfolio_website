import React from 'react';
import styles from '../styles/SkillsSection.module.css';
import { skillsCardsInfo } from '../constants/skillsCardsInfo.js';

export default function SkillsSection() {
    return (
        <div className={styles.skillsSection}>
            <h2 className={styles.skillsSectionHeading}>Skills</h2>
            <div className={styles.skillsCategoriesContainer}>
                {skillsCardsInfo.map((section, index) => (
                    <div className={styles.skillsCard} key={index}>
                        <h3>{section.title}</h3>
                            <ul>
                                {section.technologies.map((item, id) => (
                                    <li key={id}>
                                        {item.name}
                                        <item.icon className={styles.icons} />
                                    </li>
                                ))}
                            </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
