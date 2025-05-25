import styles from '../styles/ProjectsSection.module.css';
import { projectsCardsInfo } from '../constants/projectsCardsInfo.js';
import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function ProjectsSection() {
    return (
        <div className={styles.projectsSection}>
            <SectionHeading>Projects</SectionHeading>
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
                    <div className={styles.projectsCardText}>
                        <h3 className={styles.projectsCardLink}>
                            <a
                                href={cardItem.projectHref}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {cardItem.projectTitle}
                            </a>
                        </h3>
                        {cardItem.projectText.map((cardText, id) => (
                            <p key={id}>{cardText.text}</p>
                        ))}
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
                            GitHub Repo    
                        </Button>
                    </a>
                    </article>
                ))}
            </div>
        </div>
    )
}
