import React from "react";
import { useState } from "react";
import Header from "../components/Header";

// Для вывода информации на данный момент используется dnd5eapi
const Compendium = () => {
    // Состояние, определяющее запрос для поиска
    const [search, setSearch] = useState('');
    // Состояние, определяющее результат поиска
    const [searchResult, setSearchResult] = useState({});

    // Функция для вывода информации из поиска
    async function fetchSearch () {
        const result = await fetch("https://www.dnd5eapi.co/api/" + search);
        const data = await result.json();

        setSearchResult(data);
        setSearch('');        
    }
    
    return (
        <>
            <Header />

            <div className="search">
                <div className="search-bar">
                    <p>Поиск:</p>
                    <input onChange={(e) => {setSearch(e.target.value)}} />
                </div>
                <button onClick={fetchSearch}>Искать</button>
            </div>

            <div className="search-result">
                 <pre>{JSON.stringify(searchResult, null, 2)}</pre>
            </div>
        </>
    );
}

export default Compendium;