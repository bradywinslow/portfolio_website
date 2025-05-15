import React from 'react';
import styles from '../styles/Main.module.css';
import AboutSection from '../components/AboutSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import SkillsSection from './SkillsSection.jsx';
import ContactSection from './ContactSection.jsx';

export default function Main() {
    return (
        <div className={styles.mainContent}>
            <section id='about' className={styles.aboutContainer}>
                <AboutSection />
            </section>
            <section id='projects' className={styles.projectsContainer}>
                <ProjectsSection />
            </section>
            <section id='skills' className={styles.skillsContainer}>
                <SkillsSection />
            </section>
            <section id='contact' className={styles.contactContainer}>
                <ContactSection />
            </section>
        </div>
    );
}
