import styles from '../styles/ContactIcons.module.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <a
                className={styles.icons}
                href='https://www.linkedin.com/in/brady-winslow/'
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
            >
                <FaLinkedinIn />
            </a>
            <a
                className={styles.icons}
                href='https://github.com/bradywinslow'
                target='_blank'
                rel='noreferrer'
                aria-label='GitHub'
            >
                <FaGithub />
            </a>
        </div>
    )
}
