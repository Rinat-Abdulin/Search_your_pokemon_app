import styles from './PokemonCards.module.scss'
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";


function PokemonCards(props) {

    return (
        <div className={styles.PokemonCards}>
            <img className={styles.PokemonImage} src={props.url} alt="Pokemon-Photo"/>
            <p>{props.name}</p>
        </div>
    );
}

export default PokemonCards;


