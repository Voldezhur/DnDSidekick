// Импорт функционала
import { React, useEffect, useState } from "react";
import useFetching from "../../hooks/useFetching";

// Импорт компонентов
import CharacterSheetPageSelector from "./CharacterSheetPageSelector";


const CharacterSheet = ({ character, isLoading }) => {
    const [page, setPage] = useState(1);
    const [fetchRace, race, isRaceLoading] = useFetching("http://localhost:8000/compendium/races/getRaceById/" + character.race_id);
    const [fetchClass, characterClass, isClassLoading] = useFetching("http://localhost:8000/compendium/classes/getClassById/" + character.class_id);

    useEffect(() => {
        fetchRace();
        fetchClass();
    }, [])


    const renderPage = () => {
        if (isLoading) {
            return ("Загрузка");    
        }
        else {
            switch (page) {
                // Первая страница - основное
                case 1:
                    return (
                        <>
                            <CharacterSheetPageSelector title={"Основное"} page={page} setPage={setPage} />
                            <div className="character-sheet-flex">
                                <div className="character-sheet-entry">
                                    <p>Раса: {character.race_id}</p>
                                    {isRaceLoading &&
                                        <p>Раса: {race.map((item, i) => {return(<div key={i}>{item.name}</div>)})}</p>
                                    }

                                    <p>Класс: {character.class_id}</p>
                                    {/* <p>Класс: {characterClass.map((item, i) => {return(<div key={i}>{item.name}</div>)})}</p> */}

                                </div>

                                <div className="character-sheet-entry">
                                    {Object.entries(character.ability_scores).map((item, i) => {
                                        return (
                                                <div key={i}>{item[0]}: {item[1].score} modifier: {item[1].modifier}</div>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    );
                // Вторая страница - способности
                case 2:
                    return (
                        <>
                            <CharacterSheetPageSelector title={"Способности"} page={page} setPage={setPage} />
                        </>
                    )
                // Третья страница - инвентарь
                case 3:
                    return (
                        <>
                            <CharacterSheetPageSelector title={"Инвентарь"} page={page} setPage={setPage} />
                            <div className="character-sheet-flex">
                                <div className="character-sheet-entry">
                                    {/* <p>Доспех: {character.character_sheet.equipment.armor.name}</p>
                                    <p>Оружие: {character.character_sheet.equipment.weapon.name}</p>
                                    <p>
                                        Класс брони: {
                                            (character.character_sheet.equipment.armor.type === 'легкий' || character.character_sheet.equipment.armor.type === 'средний') ?
                                            character.character_sheet.equipment.armor.ac + (character.character_sheet.abilityScores.dexterity - 10) % 2 :
                                            character.character_sheet.equipment.armor.ac
                                        }
                                    </p> */}
                                </div>
                            </div>
                        </>
                    )
                default:
                    return (
                        <>
                            <CharacterSheetPageSelector title={"Ошибка"} page={page} setPage={setPage} />
                            Ошибка в отображении страницы персонажа
                        </>
                    ) 
            }
        };
    }

    return (
        <div className="character-sheet">
            {renderPage()}
        </div>
    );
}

export default CharacterSheet;