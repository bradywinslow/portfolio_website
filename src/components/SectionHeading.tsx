import { ReactNode } from 'react';
import styles from '../styles/SectionHeading.module.css';

type SectionHeadingProps = {
    children: ReactNode;
}

export default function SectionHeading({ children}: SectionHeadingProps) {
    return (
        <h2 className={styles.sectionHeading}>{children}</h2>
    )
}
