import styles from '../styles/Button.module.css';

export default function Button({ children }) {
    return (
        <button
            className={styles.buttons}
        >
            {children}
        </button>
    )
}
