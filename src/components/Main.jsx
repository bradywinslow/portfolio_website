import React from 'react';
import styles from '../styles/Main.module.css';
import aboutPhoto from '../Headshot.jpg';
import ContactIcons from './ContactIcons.jsx';
import ContactForm from './ContactForm.jsx';
import SkillsCategories from './SkillsCategories.jsx';

export default function Main() {
    return (
        <>
            <div className={styles.mainContent}>
                <section id='about' className={styles.aboutContainer}>
                    <h2 className={styles.sectionHeading}>About</h2>
                    <div className={styles.about}>
                        <div className={styles.aboutTextAndPhoto}>
                            <div className={styles.aboutText}>
                                <p>I have a Ph.D. in history and have worked as a secondary school history teacher and in customer success.</p>
                                <p>I'm now a front-end web developer. Drawing on my previous roles, I'm devoted to building customer-oriented and user-friendly applications.</p>
                                <p>I live in the San Francisco Bay Area.</p>
                            </div>
                            <div className={styles.headshotContainer}>
                                <img src={aboutPhoto} alt='Headshot' className={styles.headshot}/>
                            </div>
                        </div>
                        <div className={styles.resumeButton}>
                            <a href='/Brady_Winslow_Resume.pdf' download target='_blank' className={styles.resumeLink}>
                                <button
                                    className={styles.buttons}
                                    type='button'
                                >
                                    Download Resume
                                </button>
                            </a>
                        </div>
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
                                <h3 className={styles.projectLink}>
                                    <a
                                        href='https://reddit-client-gaming-feed.vercel.app/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Reddit Client Gaming Feed
                                    </a>
                                </h3>
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
                                    className={styles.buttons}
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
                                <h3 className={styles.projectLink}>
                                    <a
                                        href='https://findyourhat.netlify.app/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Find Your Hat
                                    </a>
                                </h3>
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
                                    className={styles.buttons}
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
                                <h3 className={styles.projectLink}>
                                    <a
                                    href='https://jammming-playlist-builder.netlify.app/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    >
                                        Jammming
                                    </a>
                                </h3>
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
                                    className={styles.buttons}
                                    type='button'
                                >
                                    GitHub Repo
                                </button>
                            </a>
                        </article>
                    </div>
                </section>
                <section className={styles.skillsSection}>
                    <h2 className={styles.sectionHeading} id='skills'>Skills</h2>
                    <div>
                        <SkillsCategories />
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
