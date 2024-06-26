import React from "react";

const CharacterSheetPageSelector = ({ title, page, setPage }) => {
    return (
        <div className="page-selector">
            <button onClick={() => {setPage(page-1 < 1 ? 3 : page-1)}}>{'<'}</button>
            <p>{title}</p>
            <button onClick={() => {setPage(page+1 > 3 ? 1 : page+1)}}>{'>'}</button>
        </div>
    );
}

export default CharacterSheetPageSelector;