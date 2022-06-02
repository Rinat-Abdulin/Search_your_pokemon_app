import styles from './Header.module.scss'
import logo from '../../pokeapi_256.3fa72200.png'
import React from 'react';
import {Link} from "react-router-dom";


function Header(props) {
    return (
        <div className={styles.Header}>
            <nav className={styles.Navigation}>
                <Link to='/'><img src={logo} alt=""/></Link>
                <Link to='/search'><p className={styles.SearchRedirect}>Search your pokemon</p></Link>
                <Link to='/about_pokemon'><p className={styles.AboutRedirect}>About Pokemons</p></Link>
                <Link to='/faq'><p className={styles.FAQ}>FAQ</p></Link>
            </nav>
        </div>
    );
}

export default Header;