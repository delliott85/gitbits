import React from 'react';

import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>gitbits</h1>
            <p className={styles.blurb}>Some handy git commands, along with some common options, to help you get started working with version control in the command line.</p>
        </header>
    );
}
