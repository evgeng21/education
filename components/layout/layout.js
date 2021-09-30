import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Link from "next/link";

export default function Layout({children}) {
            return <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                </Head>
                <header className={styles.header}>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    <Link href='/users'>
                        <a>Users</a>
                    </Link>
                </header>
                <main className={styles.main}>
                    {children}
                </main>
                <footer className={styles.footer}>
                    <Link href='/'><a>Go back to home page</a></Link>
                    <button onClick={() => {
                        localStorage.clear()
                    }}>Logout
                    </button>
                </footer>
            </div>
}