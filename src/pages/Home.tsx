import styles from '../styles/Home.module.css';
import AboutSection from '../components/AboutSection';

export default function Home() {
    return (
        <div className={styles.home}>
            <section className={styles.sectionContainers}>
                <AboutSection />
            </section>
        </div>
    )
}
