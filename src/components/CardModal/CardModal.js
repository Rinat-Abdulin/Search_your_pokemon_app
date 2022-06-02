import styles from './CardModal.module.scss'
import React, {useState} from 'react';


function CardModal(props) {
    return (
        <div className={styles.CardModal}>
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
        </div>
    );
}

export default CardModal;