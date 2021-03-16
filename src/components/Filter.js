import React from 'react';
import PropTypes from 'prop-types';

import { tags } from '../../constants';

import styles from './Filter.module.scss';

export default function Filter({ onFilterClick, activeTag }) {
    const allTags = Object.keys(tags).map((tag, i) => {
    
        return (
            <li key={`tag-button-${i}`}>
                <button
                    className={`${styles.button}${activeTag === tags[tag] ? ` ${styles.active}` : ''}`}
                    data-tag={tags[tag]}
                    onClick={onFilterClick}
                >
                    {tags[tag]}
                </button>
            </li>
        );
    });

    const allButton = (
        <li>
            <button
                className={`${styles.button}${activeTag === 'all' ? ` ${styles.active}` : ''}`}
                data-tag="all"
                onClick={onFilterClick}
            >
                All Commands
            </button>
        </li>
    );

    allTags.unshift(allButton)

    return (
        <div className={styles.filter}>
            <h3 className={styles.title}>Filter by tag</h3>
            <ul className={styles.list}>
                {allTags}
            </ul>
        </div>
    );
}

Filter.propTypes = {
    onFilterClick: PropTypes.func,
    activeTag: PropTypes.string
};
