import React from "react";
import styles from './header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.HeaderWrapper}>
            <Link className={styles.link} to={'/form1'}>
                Primul tab
            </Link>
            <Link className={styles.link} to={'/form2'}>
                Al doilea tab
            </Link>
            <Link className={styles.link} to={'/form3'}>
                Al treilea tab
            </Link>
        </div>
    )
}

export default Header;