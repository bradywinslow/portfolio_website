import styles from '../styles/SectionHeading.module.css';

export default function SectionHeading({ children}) {
    return (
        <h2 className={styles.sectionHeading}>{children}</h2>
    )
}
