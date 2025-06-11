import styles from '../styles/SkillsSection.module.css';
import SectionHeading from '../components/SectionHeading.jsx';
import { skillsCardsInfo } from '../constants/skillsCardsInfo.js';

export default function SkillsSection() {
    return (
        <div className={styles.skillsSection}>
            <SectionHeading>Skills</SectionHeading>
            <div className={styles.skillsCategoriesContainer}>
                {skillsCardsInfo.map((section, index) => (
                    <div className={styles.skillsCard} key={index}>
                        <h3>{section.title}</h3>
                            <ul>
                                {section.technologies.map((item, id) => (
                                    <li key={id}>
                                        <item.icon className={styles.icons} />
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
