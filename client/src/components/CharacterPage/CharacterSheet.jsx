import React, { useState } from "react";
import CharacterSheetPageSelector from "./CharacterSheetPageSelector";

const CharacterSheet = ({ character }) => {
    const [page, setPage] = useState(1);
    
    const renderPage = () => {
        switch (page) {
            // Первая страница - основное
            case 1:
                return (
                    <>
                        <CharacterSheetPageSelector title={"Основное"} page={page} setPage={setPage} />
                        character.character_sheet.class
                    </>
                );
            default:
                return "Ошибка в отображении страницы персонажа";
        }
    }

    return (
        <div className="character-sheet">
            {renderPage()}
        </div>
    );
}

export default CharacterSheet;