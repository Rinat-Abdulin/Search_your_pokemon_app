import styles from './FAQ.module.scss'
import React from 'react';
import Header from "../../components/Header/Header";


function Faq(props) {
    return (
        <div className={styles.FaqPage}>
            <Header/>
            <h1>How to find your Pokemon and description? <br/>Very simple!</h1>
            <br/>
            <br/>
            <ol className={styles.SearchInfoDiv}>
                <li>Enter the name of your pokemon in input field.</li>
                <li>Push "Search" button.</li>
                <li>For description click the icon.</li>
            </ol>
            <br/>
            <br/>
            <div className={styles.SearchInfo}>
                <table>
                    <caption>Example:</caption>
                    <tbody>
                    <tr>
                        <td>Bulbasaur</td>
                        <td>Ivysaur</td>
                        <td>Venusaur</td>
                    </tr>
                    <tr>
                        <td>Charmander</td>
                        <td>Charmeleon</td>
                        <td>Charizard</td>
                    </tr>
                    <tr>
                        <td>Squirtle</td>
                        <td>Wartortle</td>
                        <td>Blastoise</td>
                    </tr>
                    <tr>
                        <td>Caterpie</td>
                        <td>Metapod</td>
                        <td>Butterfree</td>
                    </tr>
                    <tr>
                        <td>Weedle</td>
                        <td>Kakuna</td>
                        <td>Beedrill</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <p className={styles.Many}>and many many more on <br/>
                    <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BF%D0%BE%D0%BA%D0%B5%D0%BC%D0%BE%D0%BD%D0%BE%D0%B2">List
                        of Pokémon</a></p>
            </div>
        </div>
    );
}

export default Faq;