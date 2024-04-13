import CharacterSheet from "../pages/CharacterSheet";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const mainRoutes = [
    { path: '/', element: <Home />, exact: true },
    { path: '/login', element: <Login />, exact: true },
    { path: '/characterSheetTest', element: <CharacterSheet />, exact: true },
    { path: '*', element: <Error />, exact: true }
]