import React, { useContext, useState } from "react";
import Header from "../components/Header";

import { UserContext } from "../App";

const Login = () => {
    const {userId, setUserId} = useContext(UserContext);  // Глобальный контекст авторизованного пользователя
    
    const [userLogin, setUserLogin] = useState(null);
    const [userPassword, setUserPassword] = useState(null);

    const [loginError, setLoginError] = useState(false);

    const getUserToLogin = () => {
        if (!userLogin || !userPassword) {
            setLoginError(true);
        }
    }

    return (
        <>
            <Header />

            {loginError &&
                <div>Ошибка при логине</div>
            }

            <button onClick={getUserToLogin}>Login</button>


        </>
    );
}

export default Login;