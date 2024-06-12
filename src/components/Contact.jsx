import React from 'react';
import styles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <a
                className={styles.FontAwesomeIcon}
                href='https://www.linkedin.com/in/brady-winslow/'
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
            >
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
                className={styles.FontAwesomeIcon}
                href='https://github.com/bradywinslow'
                target='_blank'
                rel='noreferrer'
                aria-label='GitHub'
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                className={styles.FontAwesomeIcon}
                href='mailto:brady.winslow@gmail.com'
                target='_blank'
                rel='noreferrer'
                aria-label='Email'
            >
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    )
}
