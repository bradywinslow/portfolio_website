import styles from '../styles/SkillsSection.module.css';
import { skillsCardsInfo } from '../constants/skillsCardsInfo';

export default function Skills() {
    return (
        <div className={styles.skillsCategoriesContainer}>
            {skillsCardsInfo.map((section, index) => (
                <div className={styles.skillsCard} key={index}>
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
    )
}
