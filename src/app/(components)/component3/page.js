"use client"
import styles from "../../styles/Dashboard.module.css";

const Dashboard = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const handleLogout = () => {
        window.location.href = '/';
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Dashboard</h1>
                <nav className={styles.navbar}>
                    <button onClick={handleLogout} className={styles.logoutButton}>
                        Logout
                    </button>
                </nav>
            </header>
            <section className={styles.tableSection}>
                <h2>User Emails</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Email ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Dashboard;
