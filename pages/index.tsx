import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import drift from '../static/drift';

export default function Home() {
    useEffect(() => {
        drift();
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <title>Sandbox for Drift</title>
                <link rel='icon' href='/drift-icon.png' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to my{' '}
                    <img
                        className={styles.driftLogo}
                        src='/drift-logo.svg'
                        alt='Drift Logo'
                    />
                    sandbox!
                </h1>

                <footer className={styles.footer}>
                    Powered by
                    <a
                        href='https://drift.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src='/drift-icon.png'
                            alt='Drift Logo'
                            className={styles.logo}
                        />
                    </a>
                    <a
                        href='https://nextjs.org/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src='/next-js-logo.svg'
                            alt='Next.js Logo'
                            className={styles.logo}
                        />
                    </a>
                    <a
                        href='https://reactjs.org/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src='/react-logo.svg'
                            alt='Next.js Logo'
                            className={styles.logo}
                        />
                    </a>
                </footer>
            </main>
        </div>
    );
}
