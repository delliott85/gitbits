import React, { useEffect, useState } from "react";

import { commands } from '../data';

import '../../static/scss/style.scss';

import PageMeta from '../components/PageMeta';
import Header from '../components/Header';
import CommandList from '../components/Commands';
import Footer from '../components/Footer';

export default function Home() {
    const [commandData, setCommandData] = useState(null);
    const [activeTag, setActiveTag] = useState('all');

    useEffect(() => {
        setCommandData(commands);
    }, []);

    const handleFilterClick = (e) => {
        const button = e.currentTarget;
        const tag = button.getAttribute('data-tag');

        setActiveTag(tag)

        if (tag === 'all') {
            return setCommandData(commands);
        }

        const filtered = commands.filter((command) => command.tag === tag);
        return setCommandData(filtered);
    };

    return (
        <div className="container">
            <PageMeta />
            <Header
                onFilterClick={handleFilterClick}
                activeTag={activeTag}
            />
            <CommandList data={commandData} />
            <Footer />
        </div>
    );
}
