import styles from '../styles/AboutSection.module.css';
import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';

export default function AboutSection() {
    return (
        <div className={styles.aboutSection}>
            <SectionHeading>About</SectionHeading>
            <div className={styles.aboutCard}>
                <div className={styles.aboutText}>
                    <p>👋 Hi! I'm a front end developer specializing in React, Next.js, TypeScript, and Jest. My current interests include Tailwind CSS and React Testing Library. Drawing on previous experience in customer-facing roles, I focus on building responsive, accessible, and user-friendly applications.</p>
                    <p>I live in the San Francisco Bay Area.</p>
                </div>
                <div className={styles.resumeButton}>
                    <a href='/Brady_Winslow_Resume.pdf' download target='_blank' className={styles.resumeLink}>
                        <Button
                            type='button'
                        >
                            Download Resume
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
