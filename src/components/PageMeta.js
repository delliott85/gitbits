import React from 'react';
import { Helmet } from 'react-helmet';

export default function PageMeta() {
    const title = 'gitbits | A handy cheat sheat to help you get started using git.';
    const desc = 'A easy to understand git cheat sheet to help beginners get started using git in the command line.';
    const url = 'https://gitbits.xyz';

    return (
        <Helmet>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={desc} />

            <meta name="theme-color" content="#03071e" />

            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />

            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content="/static/og-image.png" />
            <meta property="og:image:alt" content="Gitbits logo" />
            <meta property="og:description" content={desc} />
            <meta property="og:site_name" content="Gitbits" />
            <meta property="og:locale" content="en_UK" />
            <meta property="article:author" content="Dean Elliott" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="@itsdeanjs" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content="/static/card-image.png" />
            <meta name="twitter:image:alt" content="Gitbits logo" />
        </Helmet>
    );
}
