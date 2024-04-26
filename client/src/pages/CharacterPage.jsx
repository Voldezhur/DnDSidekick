import React from "react";

import { useParams } from "react-router-dom";

import Header from "../components/Header";
import CharacterSheet from "../components/CharacterSheet";

function App() {
    let { characterId } = useParams();
    
    

    return (
        <>
            <Header />
            <div className="character-page-flex">
                <CharacterSheet characterId={characterId} />
            </div>
        </>
    );
}

export default App;