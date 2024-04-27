import React from "react";

const AccentButton = ({ handleClick, title }) => {
    return (
        <>
            <button onClick={handleClick} className="accent-button">
                {title}
            </button>
        </>
    );
}

export default AccentButton;