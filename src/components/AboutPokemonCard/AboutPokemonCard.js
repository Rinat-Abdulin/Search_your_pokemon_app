import styles from './AboutPokemonCard.module.scss'

import React from 'react';
import {Link} from "react-router-dom";

function AboutPokemonCard(props) {
    return (
        <div className={styles.AboutPokemonCard}>
            <img src={props.url} alt="Pokemon"/>
            <h2>{props.name}</h2>
            <br/>
            <h3>{props.stats}</h3>
            <ul>
                <li>{props.hp}</li>
                <li>{props.attack}</li>
                <li>{props.deffence}</li>
                <li>{props.special_attack}</li>
                <li>{props.specia_deffence}</li>
                <li>{props.speed}</li>
            </ul>
            <br/>
            <Link to='/'><button>&#129092;BACK</button></Link>
        </div>
    );
}

export default AboutPokemonCard;