"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/signUp.module.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();

        const newUser = {
            username,
            email,
            password,
        };

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        setUsername('');
        setEmail('');
        setPassword('');

        window.location.href = '/';
    };

    return (
        <div className={styles.registrationContainer}>
            <div className={styles.content}>
                <h2 className={styles.heading}>Create an Account</h2>
                <form className={styles.registrationForm} onSubmit={handleRegistration}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username" className={styles.label}>Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.inputField}
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.inputField}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.label}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.inputField}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>Register</button>
                    <small className={styles.small}>Already have an Account! <Link href="/component2">Login</Link></small>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
