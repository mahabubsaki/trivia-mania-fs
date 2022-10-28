import React, { useState } from 'react';
import styles from './Switcher.module.css';

const Switcher = () => {
    const [toggled, setToggled] = useState(false);
    const handleClick = () => {
        setToggled((s) => !s);
    };
    return (
        <div title={toggled ? 'Switch to Light Mode' : 'Switch to Dark Mode'} onClick={handleClick} className={`${styles.toggle} ${toggled ? styles.night : ""}`}>
            <div className={styles.notch}>
                <div className={styles.crater} />
                <div className={styles.crater} />
            </div>
            <div>
                <div className={`${styles.shape} ${styles.sm}`} />
                <div className={`${styles.shape} ${styles.sm}`} />
                <div className={`${styles.shape} ${styles.md}`} />
                <div className={`${styles.shape} ${styles.lg}`} />
            </div>
        </div>
    );
};

export default Switcher;