import React, { useState } from "react";
import CharacterSheetPageSelector from "./CharacterSheetPageSelector";

const CharacterSheet = ({ character, isLoading }) => {
    const [page, setPage] = useState(1);
    
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
                                    <p>Класс: {character.class_id}</p>
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