import styles from '../styles/AboutSection.module.css';
import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';

export default function AboutSection() {
    return (
        <div className={styles.aboutSection}>
            <SectionHeading>About</SectionHeading>
            <div className={styles.aboutCard}>
                <div className={styles.aboutText}>
                    <p>👋 Hi! I'm a front-end web developer with a unique background: I have a Ph.D. in history, have taught middle and high school history, and worked as a customer success manager.</p>
                    <p>Now, I build responsive, accessible, and user-friendly web applications—pairing strong technical skills with real-world experience in customer communication and problem solving.</p>
                    <p>My goal in every project is simple: to create intuitive, inclusive digital experiences that anyone can use with ease.</p>
                    <p>Currently coding away in the San Francisco Bay Area.</p>
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
