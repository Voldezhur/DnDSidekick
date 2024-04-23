import Home from "../pages/Home";
import Login from "../pages/Login";
import CharacterSheet from "../pages/CharacterSheet";
import CharacterCreation from "../pages/CharacterCreation";
import Compendium from "../pages/Compendium";
import Error from "../pages/Error";

export const mainRoutes = [
    { path: '/', element: <Home />, exact: true },
    { path: '/login', element: <Login />, exact: true },
    { path: '/characterSheetTest', element: <CharacterSheet />, exact: true },
    { path: '/characterCreation', element: <CharacterCreation />, exact: true },
    { path: '/compendium', element: <Compendium />, exact: true },
    { path: '*', element: <Error />, exact: true }
]