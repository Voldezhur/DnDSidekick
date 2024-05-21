import React, { useEffect, useState } from "react";
import useFetching from "../../hooks/useFetching";

import { Link } from "react-router-dom";


const CharacterCard = ({ character }) => {
    const [fetchClass, characterClass, isClassLoading] = useFetching("http://localhost:8000/compendium/classes/getClassById/" + character.class_id);

    useEffect(() => {
        fetchClass();
    }, [])

    return (
        <li className="character-card">
            <div className="character-meta">
                <div className="card-buttons">
                    <Link to={"/characterSheet/" + character.character_id}>
                        <button>Перейти на страницу</button>
                    </Link>
                    <button onClick={() => {alert("Код персонажа: " + character.character_id)}}>
                        Поделиться персонажем
                    </button>
                </div>
                <div className="name-and-class">
                    <p className="title">{character.name.split(' ')[0]}</p>
                    {isClassLoading === false &&
                        <div>
                            {characterClass.map((item, i) => {
                                return(
                                    <div key={i}>
                                        {item.name}
                                    </div>
                                );
                            })}
                        </div>
                    }
                </div>
            </div>
        </li>
    );
}

export default CharacterCard;