import React from 'react';
import styles from '../styles/Main.module.css';
import aboutPhoto from "../Headshot.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

export default function Main() {
    return (
        <>
            <div className={styles.mainContent}>
                <section id='about'>
                    <div className={styles.about}>
                        <div className={styles.aboutText}>
                            <h2>Hi, I'm Brady!</h2>
                            <p>I have a Ph.D. in history and have worked as a high school history teacher and in customer success. Drawing on my experiences in these people-facing roles, I'm now a self-taught front-end web developer, devoted to building customer-oriented, user-friendly applications. I live in the San Francisco Bay Area.</p>
                        </div>
                        <img src={aboutPhoto} alt='Headshot' className={styles.headshot}/>
                    </div>
                </section>
                <section className={styles.projects}>
                    <h2 id='projects'>Projects</h2>
                    <div className={styles.details}>
                        <details className={styles.projectDetails}>
                            <summary>Project 1</summary>
                        </details>
                        <details className={styles.projectDetails}>
                            <summary>Project 2</summary>
                        </details>
                        <details className={styles.projectDetails}>
                            <summary>Project 3</summary>
                        </details>
                    </div>
                </section>
                <section className={styles.skills}>
                    <h2 id='skills'>Skills</h2>
                    <div className={styles.skillsIcons}>
                        <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faHtml5} />
                        <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faCss3Alt} />
                        <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faJs} />
                        <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faReact} />
                    </div>
                </section>
            </div>
        </>
    );
}