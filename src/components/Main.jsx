import React from 'react';
import styles from '../styles/Main.module.css';
import aboutPhoto from "../Headshot.jpg";
import { FaHtml5, FaCss3Alt, FaReact, FaGit, FaGithub } from "react-icons/fa";
import { SiJavascript, SiReactrouter, SiChakraui } from "react-icons/si";

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
                                    className={styles.video}
                                    src='https://www.loom.com/embed/52d0172d70c84cfb8a0cb8e0bd809174?sid=22ebd1fc-0561-4815-83b7-e03714b77688'
                                    title='Jammming application video demo'
                                    frameBorder="0"
                                    webkitallowfullscreen='true'
                                    mozallowfullscreen='true'
                                    allow='fullscreen'
                                ></iframe>
                            </div>
                            <p>Jammming is a web application that allows a user to sign in to their Spotify account, search for songs, albums, or artists, create a personalized playlist, and save the playlist to their Spotify account.</p>
                        </article>
                        <article className={styles.projectDetails}>
                            <h3><a href='https://github.com/bradywinslow/findYourHat'>Find Your Hat</a></h3>
                            <div className={styles.videoDemo}>
                                <iframe
                                    className={styles.video}
                                    src='https://www.loom.com/embed/e75761eb90f24aefa62a0fc6cfa5dd80?sid=939e91fe-1b77-4e7c-8c9e-e063f2367d4d'
                                    title='Find Your Hat application video demo'
                                    frameBorder="0"
                                    webkitallowfullscreen='true'
                                    mozallowfullscreen='true'
                                    allow='fullscreen'
                                ></iframe>
                            </div>
                            <p>Find Your Hat is a game. After setting the width and height of the playing field, along with the percentage of the field to be covered in holes, a user navigates through the field, trying to avoid the holes to find the hat.</p>
                        </article>
                    </div>
                </section>
                <section className={styles.skills}>
                    <h2 id='skills'>Skills</h2>
                    <div className={styles.skillsIcons}>
                        <FaHtml5 className={styles.icons} />
                        <FaCss3Alt className={styles.icons} />
                        <SiJavascript className={styles.icons} />
                        <FaReact className={styles.icons} />
                        <SiReactrouter className={styles.icons}/>
                        <SiChakraui className={styles.icons} />
                        <FaGit className={styles.icons} />
                        <FaGithub className={styles.icons} />
                    </div>
                </section>
            </div>
        </>
    );
}