import React from 'react';
import styles from '../styles/ContactIcons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

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
        </div>
    )
}
