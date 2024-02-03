"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/SignIn.module.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = existingUsers.find(user => user.email === email);

        if (foundUser) {
            window.location.href = '/component3';
        } else {
            setError('User not found, Create an Account.');
        }
    };

    return (
        <div className={styles.registrationContainer}>
            <div className={styles.content}>
                <h2 className={styles.heading}>Login</h2>
                <form className={styles.registrationForm} onSubmit={handleSignIn}>
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
                    <button type="submit" className={styles.submitButton}>
                        Submit
                    </button>
                    <small className={styles.error}>{error}</small>
                    <small className={styles.small}>Don't have an Account! <Link href="/component1">Create New Account</Link></small>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
