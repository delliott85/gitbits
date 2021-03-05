import React from 'react';

import { commands } from '../data';

import LinkIcon from './icons/Link';

import styles from './Commands.module.scss';

export default function Commands() {
    const commandList = commands.map((command, i) => {
        let commonFlags;
        let link;

        if (command.link) {
            link = (
                <a
                    className={styles.link}
                    href={command.link}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    title="Official Docs"
                >
                    <LinkIcon />
                </a>
            );
        }

        if (command.flags) {
            commonFlags = (
                <dl className={styles.flags}>
                    {command.flags.map((flag, i) => {
                        return (
                            <li
                                className={styles.flag}
                                key={`flag-${i}`}
                            >
                                <pre className={styles.code}>{flag.command}</pre>
                                <p className={styles.description} dangerouslySetInnerHTML={{__html: flag.description}} />
                            </li>
                        );
                    })}         
                </dl>
            );
        }
        return (
            <li
                key={`command-${i}`}
                className={styles.command}
            >
                <p className={styles.head}>
                    <pre className={styles.code}>{command.command}</pre>
                    {link}
                </p>
                <p className={styles.description}>{command.description}</p>
                {/* <p className={styles.when} dangerouslySetInnerHTML={{__html: command.when}} /> */}
                {commonFlags}
            </li>
        );
    });

    return (
        <ul className={styles.commands}>
            {commandList}
        </ul>
    );
}
