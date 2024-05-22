// Импорт функционала
import { React, useState } from "react";
import useFetching from "../../hooks/useFetching";

// Импорт компонентов
import CharacterSheetPageSelector from "./CharacterSheetPageSelector";


const shittyAttributeTranslation = (attribute) => {
    switch(attribute) {
        case "strength":
            return "Сила";
        case "dexterity":
            return "Ловкость";
        case "constitution":
            return "Телосложение";
        case "intelligence":
            return "Интеллект";
        case "wisdom":
            return "Мудрость";
        case "charisma":
            return "Харизма";
        default:
            return attribute;
    }
}

const CharacterSheet = ({ character, isLoading }) => {
    const [page, setPage] = useState(1);
    const [fetchRace, race] = useFetching("http://localhost:8000/compendium/races/getRaceById/" + character.race_id);
    const [fetchClass, characterClass] = useFetching("http://localhost:8000/compendium/classes/getClassById/" + character.class_id);

    const [fetched, setFetched] = useState(false);

    const renderPage = () => {
        if (isLoading) {
            return ("Загрузка");    
        }
        else {
            // Для того, чтобы фетчилось только один раз
            // В useEffect не получилось, потому что в начале рендера персонаж еще не подгружен
            if (!fetched)
            {
                fetchRace();
                fetchClass();
                setFetched(true);
            }

            switch (page) {
                // Первая страница - основное
                case 1:
                    return (
                        <>
                            <CharacterSheetPageSelector title={"Основное"} page={page} setPage={setPage} />
                            <div className="character-sheet-flex">
                                <div className="character-sheet-entry">
                                    <p>Раса: {race.map((item) => {return(item.name)})}</p>

                                    <p>Класс: {characterClass.map((item) => {return(item.name)})}</p>

                                </div>

                                <div className="character-sheet-entry">
                                    {Object.entries(character.ability_scores).map((item, i) => {
                                        return (
                                                <div key={i}>{shittyAttributeTranslation(item[0])}: {item[1].score} Модификатор: {item[1].modifier}</div>
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