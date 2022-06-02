import styles from './Home.module.scss'
import React, {useEffect, useState} from 'react';
import PokemonCards from "../../components/PokemonCards/PokemonCards";
import Header from "../../components/Header/Header";
import SearchSection from "../../components/SearchSection/SearchSection";
import BG_image from '../../pokeapi_256.3fa72200.png'
import {Link} from "react-router-dom";
import Modal from "../../components/Modal/Modal";


function Home() {

    const [pokemon, setPokemon] = useState([])

    useEffect(async () => {
        const pokArr = []
        let allPokemon = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        allPokemon = await allPokemon.json()

        await allPokemon.results.forEach(async (item) => {
            let pokemonItem = await fetch(item.url)
            pokemonItem = await pokemonItem.json()

            await setPokemon((currentList) => [...currentList, pokemonItem])
        })


    }, [])

    return (
        <div className={styles.PokemonHomePage}>
            <Header/>
            <SearchSection/>
            <h1>Сlick any Pokemon card to view statistics</h1>
            <ul className={styles.CardsList}>
                {pokemon.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to='./about_pokemon'> <PokemonCards url={item.sprites.other.dream_world.front_default}
                                                                      name={item.name}/></Link>
                        </li>)
                })}
            </ul>
        </div>
    );
}

export default Home;