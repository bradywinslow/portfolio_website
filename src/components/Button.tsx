import { ReactNode } from 'react';
import styles from '../styles/Button.module.css';

type ButtonProps = {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
};

export default function Button({ children }: ButtonProps) {
    return (
        <button
            className={styles.buttons}
        >
            {children}
        </button>
    )
}
