import styles from './AboutPokemon.module.scss'
import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom";
import AboutPokemonCard from "../../components/AboutPokemonCard/AboutPokemonCard";
import PokemonCards from "../../components/PokemonCards/PokemonCards";


function AboutPokemon() {

    const [pokemonDescription, setPokemonDescription] = useState([])
        useEffect(async () => {
            const pokArr = []
            let pokArrDesc = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
            pokArrDesc = await pokArrDesc.json()

            await pokArrDesc.results.forEach(async (item) => {
                let pokemonItemDesc= await fetch (item.url)
                pokemonItemDesc= await pokemonItemDesc.json()

                await setPokemonDescription( (currentList) => [...currentList, pokemonItemDesc])
            })

    }, [])

    return (
        <div className={styles.AboutPokemon}>
            <Header/>
            <div className={styles.DescriptionCards}>
                {pokemonDescription.map((item, index) => {
                    return (
                        <ul className={styles.AboutPokemonCards} key={index}>
                            <li><AboutPokemonCard url={item.sprites.other.dream_world.front_default}
                                                  name={item.name}
                                                  stats={'STATS'}
                                                  hp={item.stats[0].stat.name + ':' + ' ' + ' ' + item.stats[0].base_stat}
                                                  attack={item.stats[1].stat.name + ':' + ' ' + ' ' + item.stats[1].base_stat}
                                                  deffence={item.stats[2].stat.name + ':' + ' ' + ' ' + item.stats[2].base_stat}
                                                  special_attack={item.stats[3].stat.name + ':' + ' ' + ' ' + item.stats[3].base_stat}
                                                  specia_deffence={item.stats[4].stat.name + ':' + ' ' + ' ' + item.stats[4].base_stat}
                                                  speed={item.stats[5].stat.name + ':' + ' ' + ' ' + item.stats[5].base_stat}
                            /></li>
                        </ul>
                    )
                })}
            </div>
        </div>
    );
}

export default AboutPokemon;