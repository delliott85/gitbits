import React from 'react';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Site by <a href="https://deanelliott.me" target="_blank" rel="nofollow noreferrer">Dean Elliott</a>. &copy; {new Date().getFullYear()}</p>
        </footer>
    )
};
