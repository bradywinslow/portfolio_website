import styles from '../styles/Main.module.css';
import AboutSection from '../components/AboutSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import SkillsSection from './SkillsSection.jsx';
import ContactSection from './ContactSection.jsx';

export default function Main() {
    return (
        <div className={styles.mainContent}>
            <section id='about' className={styles.sectionContainers}>
                <AboutSection />
            </section>
            <section id='skills' className={styles.sectionContainers}>
                <SkillsSection />
            </section>
            <section id='projects' className={styles.sectionContainers}>
                <ProjectsSection />
            </section>
            <section id='contact' className={styles.sectionContainers}>
                <ContactSection />
            </section>
        </div>
    );
}
