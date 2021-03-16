import React from 'react';
import PropTypes from 'prop-types';

import Filter from './Filter';

import styles from './Header.module.scss';

export default function Header({ onFilterClick, activeTag }) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>gitbits</h1>
            <p className={styles.blurb}>Some handy git commands, along with some common options, to help you get started working with version control in the command line.</p>
            <Filter
                onFilterClick={onFilterClick}
                activeTag={activeTag}
            />
        </header>
    );
}

Header.propTypes = {
    onFilterClick: PropTypes.func,
    activeTag: PropTypes.string
};
