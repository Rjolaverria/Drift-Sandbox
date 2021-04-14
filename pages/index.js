import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    useEffect(() => {
        (function () {
            var t = (window.driftt = window.drift = window.driftt || []);
            if (!t.init) {
                if (t.invoked)
                    return void (
                        window.console &&
                        console.error &&
                        console.error('Drift snippet included twice.')
                    );
                (t.invoked = !0),
                    (t.methods = [
                        'identify',
                        'config',
                        'track',
                        'reset',
                        'debug',
                        'show',
                        'ping',
                        'page',
                        'hide',
                        'off',
                        'on',
                    ]),
                    (t.factory = function (e) {
                        return function () {
                            var n = Array.prototype.slice.call(arguments);
                            return n.unshift(e), t.push(n), t;
                        };
                    }),
                    t.methods.forEach(function (e) {
                        t[e] = t.factory(e);
                    }),
                    (t.load = function (t) {
                        var e = 3e5,
                            n = Math.ceil(new Date() / e) * e,
                            o = document.createElement('script');
                        (o.type = 'text/javascript'),
                            (o.async = !0),
                            (o.crossorigin = 'anonymous'),
                            (o.src =
                                'https://js.driftt.com/include/' +
                                n +
                                '/' +
                                t +
                                '.js');
                        var i = document.getElementsByTagName('script')[0];
                        i.parentNode.insertBefore(o, i);
                    });
            }
        })();
        drift.SNIPPET_VERSION = '0.3.1';
        drift.load('gwpe3ayxa83h');

        drift.on('ready', (api) => {
            api.widget.show();
        });
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
