// Импорт функционала
import React from "react";

// Импорт компонентов
import Header from "../components/Header";

const Error = () => {
    return (
        <>
            <Header />
            <div className="error-text">
                <div className="error-code">404</div>
                <p>Страница не найдена</p>
            </div>
        </>
    );
}

export default Error;