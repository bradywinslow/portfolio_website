import styles from '../styles/ProjectsSection.module.css';
import { projectsCardsInfo } from '../constants/projectsCardsInfo';
import Button from '../components/Button';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function ProjectsSection() {
    return (
        <div className={styles.projectsSection}>
            <div className={styles.projectsCardContainer}>
                {projectsCardsInfo.map((cardItem, index) => (
                    <article key={index} className={styles.projectsCard}>
                    <div className={styles.videoContainer}>
                        <LiteYouTubeEmbed
                            id={cardItem.videoId}
                            adNetwork={false}
                            playlist={false}
                            poster='hqdefault'
                            title={cardItem.videoTitle}
                            cookie={false}
                            playerClass={styles.youtubePlayButton}
                        />
                    </div>
                    <div className={styles.projectsCardTitle}>
                        <h3 className={styles.projectsCardLink}>
                            <a
                                href={cardItem.projectHref}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {cardItem.projectTitle}
                            </a>
                        </h3>
                    </div>
                    <div className={styles.projectsSkills}>
                        <ul>
                            {cardItem.projectSkills.map((item, id) => (
                                <li key={id}>
                                    <item.icon className={styles.projectsSkillsIcons} />
                                    {item.skill}
                                </li>
                            ))}
                        </ul>                        
                    </div>
                    <div className={styles.projectsCardText}>
                        <p>{cardItem.projectText}</p>
                    </div>
                    <a
                        className={styles.githubRepoLink}
                        href={cardItem.githubRepoHref}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Button
                            type='button'
                        >
                            Code
                        </Button>
                    </a>
                    </article>
                ))}
            </div>
        </div>
    )
}
