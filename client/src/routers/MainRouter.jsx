import React from "react";
import { Routes, Route } from 'react-router-dom';

import { mainRoutes } from "./routes";

const MainRouter = () => {
    return (
        <Routes>
            {
                mainRoutes.map(route => 
                    <Route 
                        exact={route.exact}
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                )
            }
        </Routes>
    );
}

export default MainRouter;