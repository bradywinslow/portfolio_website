import styles from '../styles/Projects.module.css';
import ProjectsSection from '../components/ProjectsSection';

export default function Projects() {
    return (
        <div className={styles.projectsContent}>
            <section className={styles.projectsContainers}>
                <ProjectsSection />
            </section>
        </div>
    )
}
