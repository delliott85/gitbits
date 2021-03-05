import React from "react";

import '../../static/scss/style.scss';

import PageMeta from '../components/PageMeta';
import Header from '../components/Header';
import CommandList from '../components/Commands';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="container">
            <PageMeta />
            <Header />
            <CommandList />
            <Footer />
        </div>
    );
}
