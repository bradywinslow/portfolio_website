import React from 'react';
import styles from '../styles/Main.module.css';
import aboutPhoto from "../Headshot.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Main() {
    return (
        <>
            <div className={styles.mainContent}>
                <section id='about' className={styles.aboutContainer}>
                    <h1 className={styles.greeting}>Hi, I'm Brady!</h1>
                    <div className={styles.about}>
                        <div className={styles.aboutText}>
                            <p>I have a Ph.D. in history and have worked as a secondary school history teacher and in customer success.</p>
                            <p>I'm now a self-taught front-end web developer. Drawing on my previous roles, I'm devoted to building customer-oriented and user-friendly applications.</p>
                            <p>I live in the San Francisco Bay Area.</p>
                        </div>
                        <img src={aboutPhoto} alt='Headshot' className={styles.headshot}/>
                    </div>
                </section>
                <section id='projects' className={styles.projects}>
                    <h2>Projects</h2>
                    <div className={styles.details}>
                        <article className={styles.projectDetails}>
                            <h3><a href='https://github.com/bradywinslow/jammming'>Jammming</a></h3>
                            <div className={styles.videoDemo}>
                                <iframe
                                    className={styles.jammmingVideo}
                                    src="https://www.loom.com/embed/0a9dc973ed68446bbfb6d4d263c4ea33?sid=ef48683b-a9bc-4186-b19c-44c9bedc9a6c"
                                    title='Jammming application video demo'
                                    frameBorder="0"
                                    webkitallowfullscreen='true'
                                    mozallowfullscreen='true'
                                    allow='fullscreen'
                                ></iframe>
                            </div>
                            <p>Jammming is a web application that allows a user to log in to their Spotify account, search for songs, albums, or artists, create a personalized playlist, and save the playlist to their Spotify account.</p>
                        </article>
                    </div>
                </section>
                <section className={styles.skills}>
                    <h2 id='skills'>Skills</h2>
                    <div className={styles.skillsIcons}>
                        <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faHtml5} />
                        <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faCss3Alt} />
                        <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faJs} />
                        <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faReact} />
                        <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faGit} />
                        <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faGithub} />
                    </div>
                </section>
            </div>
        </>
    );
}