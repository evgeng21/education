import loginAPI from '../../servises/API/loginAPI';
import {useState} from 'react';
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {

    const [user, setUser] = useState('erp_user')
    const [password, setPassword] = useState('12qwaszx12qwaszx')
    const Router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
    }

    const onLoginClick = () => {
        loginAPI({user, password});
        Router.replace("/")
    }

    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <form onSubmit={handleClick}>
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)}/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={onLoginClick}>Login</button>
                <button onClick={() => {
                    localStorage.clear()
                }}>Logout
                </button>
            </form>
            <footer className={styles.footer}>
                <Link href='/'><a>Go back to home page</a></Link>
                <button onClick={() => {localStorage.clear()}}>Logout</button>
            </footer>
        </>
    )

}