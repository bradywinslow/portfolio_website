import styles from '../styles/Contact.module.css';
import ContactSection from '../components/ContactSection';
// import Button from '../components/Button';

export default function Contact() {
    return (
        <div className={styles.contactContent}>
            <section id='contact' className={styles.contactContainer}>
                <ContactSection />
            </section>
            { /* <section>
                <div className={styles.resumeButton}>
                    <a href='/Brady_Winslow_Resume.pdf' download target='_blank' className={styles.resumeLink}>
                        <Button
                            type='button'
                        >
                            Download Resume
                        </Button>
                    </a>
                </div>
            </section> */}
        </div>
    )
}
