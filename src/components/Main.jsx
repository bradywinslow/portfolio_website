import React from 'react';
import styles from '../styles/Main.module.css';
import aboutPhoto from '../Headshot.jpg';
import { FaHtml5, FaCss3Alt, FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiChakraui } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import ContactIcons from './ContactIcons.jsx';
import ContactForm from './ContactForm.jsx';

export default function Main() {
    return (
        <>
            <div className={styles.mainContent}>
                <section id='about' className={styles.aboutContainer}>
                    <h1 className={styles.greeting}>Hi, I'm Brady!</h1>
                    <div className={styles.about}>
                        <div className={styles.aboutText}>
                            <p>I have a Ph.D. in history and have worked as a secondary school history teacher and in customer success.</p>
                            <p>I'm now a front-end web developer. Drawing on my previous roles, I'm devoted to building customer-oriented and user-friendly applications.</p>
                            <p>I live in the San Francisco Bay Area.</p>
                        </div>
                        <img src={aboutPhoto} alt='Headshot' className={styles.headshot}/>
                    </div>
                </section>
                <section id='projects' className={styles.projects}>
                    <h2 className={styles.sectionHeading}>Projects</h2>
                    <div className={styles.details}>
                        <article className={styles.projectDetails}>
                            <div className={styles.videoDemo}>
                                <iframe
                                    className={styles.video}
                                    width='560'
                                    height='315'
                                    src='https://www.youtube.com/embed/Ixs2bfRP0Sg?si=7YlVVqlX9ZjWJQMx'
                                    title='Reddit Client Gaming Feed application video demo'
                                    controls
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    webkitallowfullscreen='true'
                                    mozallowfullscreen='true'
                                ></iframe>
                            </div>
                            <div className={styles.projectCardText}>
                                <h3 className={styles.projectLink}><a href='https://reddit-client-gaming-feed.vercel.app/'>Reddit Client Gaming Feed</a></h3>
                                <p className={styles.videoDemoText}>Reddit Client Gaming Feed is a web application that displays gaming-related posts from Reddit, providing users with a feed of content focused on gaming discussions, media, and news.</p>
                                <p>Technologies: HTML5, CSS3, TypeScript, Next.js, Chakra UI, Vercel</p>
                            </div>
                            <a
                                className={styles.githubLink}
                                href='https://github.com/bradywinslow/reddit-client'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button
                                    className={styles.githubButton}
                                    type='button'
                                >
                                    GitHub Repo    
                                </button>
                            </a>
                        </article>
                        <article className={styles.projectDetails}>
                            <div className={styles.videoDemo}>
                                <iframe
                                    className={styles.video}
                                    width='560'
                                    height='315'
                                    src='https://www.youtube.com/embed/YCnOO_iZ2fw?si=c1ySWXxX3lchUJIk'
                                    title='Find Your Hat application video demo'
                                    controls
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    webkitallowfullscreen='true'
                                    mozallowfullscreen='true'
                                ></iframe>
                            </div>
                            <div className={styles.projectCardText}>
                                <h3 className={styles.projectLink}><a href='https://findyourhat.netlify.app/'>Find Your Hat</a></h3>
                                <p className={styles.videoDemoText}>Find Your Hat is a game. After setting a width and height, and a percentage for holes to appear on the field, a user navigates through the field, trying to avoid the holes to find the hat.</p>
                                <p>Technologies: HTML5, CSS3, JavaScript, React, React Router, Netlify</p>
                            </div>
                            <a
                                className={styles.githubLink}
                                href='https://github.com/bradywinslow/findYourHat'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button
                                    className={styles.githubButton}
                                    type='button'
                                >
                                    GitHub Repo
                                </button>
                            </a>
                        </article>
                        <article className={styles.projectDetails}>
                            <div className={styles.videoDemo}>
                                <iframe
                                    className={styles.video}
                                    width='560'
                                    height='315'
                                    src='https://www.youtube.com/embed/WSdDwcX9JZQ?si=86-eQ7siCpWD-vt6'
                                    title='Jammming application video demo'
                                    controls
                                    frameBorder='0'
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    webkitallowfullscreen='true'
                                    mozallowfullscreen='true'
                                ></iframe>
                            </div>
                            <div className={styles.projectCardText}>
                                <h3 className={styles.projectLink}><a href='https://jammming-playlist-builder.netlify.app/'>Jammming</a></h3>
                                <p className={styles.videoDemoText}>Jammming is a web application that allows a user to sign in to their Spotify account, search for songs, albums, or artists, create a personalized playlist, and save the playlist to Spotify.</p>
                                <p>Technologies: HTML5, CSS3, JavaScript, React, React Router, Chakra UI, Netlify</p>
                            </div>
                            <a
                                className={styles.githubLink}
                                href='https://github.com/bradywinslow/jammming'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button
                                    className={styles.githubButton}
                                    type='button'
                                >
                                    GitHub Repo
                                </button>
                            </a>
                        </article>
                    </div>
                </section>
                <section className={styles.skills}>
                    <h2 className={styles.sectionHeading} id='skills'>Skills</h2>
                    <div className={styles.skillsIcons}>
                        <FaHtml5 className={styles.icons} />
                        <FaCss3Alt className={styles.icons} />
                        <SiJavascript className={styles.icons} />
                        <SiTypescript className={styles.icons} />
                        <FaReact className={styles.icons} />
                        <RiNextjsFill className={styles.icons} />
                        <SiChakraui className={styles.icons} />
                        <FaGit className={styles.icons} />
                        <FaGithub className={styles.icons} />
                    </div>
                </section>
                <section className={styles.contact}>
                    <h2 className={styles.sectionHeading} id='contact'>Contact</h2>
                    <div className={styles.contactForm}>
                        <ContactForm />
                    </div>
                    <div className={styles.contactIcons}>
                        <ContactIcons />
                    </div>
                </section>
            </div>
        </>
    );
}
