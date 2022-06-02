import styles from './SearchSection.module.scss'
import React, {useEffect, useState} from 'react';
import PokemonCards from "../PokemonCards/PokemonCards";
import Modal from "../Modal/Modal";
import AboutPokemonCard from "../AboutPokemonCard/AboutPokemonCard";
import CardModal from "../CardModal/CardModal";


function SearchSection(props) {
    const [modalActive, setModalActive] = useState(false)
    const [pokemon, setPokemon] = useState([])
    const [inputValue, setInputValue] = useState('')


    let SearchPokemon = (async () => {
        const pokArr = []

        let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`)
        result = await result.json()
        pokArr.push(result)

        await setPokemon(pokArr)
    })

    return (
        <div className={styles.SearchSection}>
            <div className={styles.SearchAndButton}>
                <input type='text' placeholder='Find pokemon' value={inputValue.toLowerCase()}
                       onChange={event => setInputValue(event.target.value)}/>
                <button type='button' disabled={inputValue.length === 0}
                        onClick={() => SearchPokemon(inputValue)}>Search
                </button>
            </div>
            <ul className={styles.CardsList}>
                {pokemon.map((item, index) => {
                    return (
                        <div className={styles.SearchCard} key={index} onClick={() => setModalActive(true)}>
                            <PokemonCards url={item.sprites.other.dream_world.front_default} name={item.name}/>
                        </div>
                    )
                })}
            </ul>
            <Modal active={modalActive} setActive={setModalActive} >
                {pokemon.map((item, index) => {
                    return (
                        <ul className={styles.AboutPokemonCards} key={index}>
                            <li><CardModal url={item.sprites.other.dream_world.front_default}
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
            </Modal>
        </div>
    );
}

export default SearchSection;