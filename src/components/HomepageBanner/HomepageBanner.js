import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomepageBanner.module.css';

export default function HomepageBanner () {
const {siteConfig} = useDocusaurusContext();
return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className="container">
        <h1 className={clsx("hero__title", styles.pageTitle)}>{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.pageSubTitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
            className="button button--secondary button--lg"
            to="/contributions">
            Explore
        </Link>
        </div>
    </div>
    </header>
);
}