import React from "react";

const AccentButton = ({ handleClick, title, className }) => {
    const classString = "accent-button " + className;
    
    return (
        <>
            <button onClick={handleClick} className={classString}>
                {title}
            </button>
        </>
    );
}

export default AccentButton;