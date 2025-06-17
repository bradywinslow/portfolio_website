import styles from '../styles/AboutSection.module.css';
import Skills from './Skills';

export default function AboutSection() {
    return (
        <div className={styles.aboutSection}>
            <img className={styles.headshot} src='/headshot.jpg' alt='headshot'></img>
            <div className={styles.aboutCard}>
                <div className={styles.aboutText}>
                    <p>I'm a front end developer specializing in React, Next.js, TypeScript, and Jest. My current interests include Tailwind CSS and React Testing Library. Drawing on previous experience in customer-facing roles, I focus on building responsive, accessible, and user-friendly applications.</p>
                    <p>I live in the San Francisco Bay Area.</p>
                </div>
                <Skills />
            </div>
        </div>
    )
}
