import React from 'react';

import { mapColorToTag, tags } from '../../constants';

import styles from './Filter.module.scss';

export default function Filter() {
    const options = Object.keys(tags);
    const labels = options.map((option) => {
        return tags[option]
    });

    const filterOptions = labels.map((option, i) => {
        return (
            <li
                key={`option-${i}`}
            >
                {option}
            </li>
        )
    });

    return (
        <div className={styles.filter}>
            <ul>
                {filterOptions}
            </ul>
        </div>
    );
}
