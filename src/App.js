import './App.css';
import Home from "./pages/HomePage/Home";
import AboutPokemon from "./pages/AboutPokemon/AboutPokemon";
import { Routes, Route, Link } from "react-router-dom";
import SearchYourPokemon from "./pages/SearchYourPokemon/SearchYourPokemon";
import Faq from "./pages/FAQ/FAQ";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about_pokemon' element={<AboutPokemon />}/>
                <Route path='/search' element={<SearchYourPokemon />}/>
                <Route path='/faq' element={<Faq/>}/>
            </Routes>
        </div>
    );
}

export default App;


