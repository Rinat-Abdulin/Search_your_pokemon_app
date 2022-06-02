import styles from './SearchYourPokemon.module.scss'
import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import SearchSection from "../../components/SearchSection/SearchSection";

function SearchYourPokemon(props) {


    return (
        <div className={styles.SearchYourPokemon}>
            <Header/>
            <h1>Search your pokemon!</h1>
            <SearchSection />
        </div>
    );
}

export default SearchYourPokemon;