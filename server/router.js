const RouterClass = require('express').Router;

const Users = require("./api/users.js");
const Characters = require("./api/characters.js");

const mainRouter = new RouterClass();

// Users
mainRouter.get('/user/list', Users.getAllUsers);

// Characters
mainRouter.get('/character/uid/:uid', Characters.getCharactersOfUser);
mainRouter.get('/character/character_id/:character_id', Characters.getCharactersById);
mainRouter.post('/character/newCharacter', Characters.postNewCharacter)
mainRouter.delete('/character/deleteCharacter/:character_id', Characters.deleteCharacter);

module.exports.mainRouter = mainRouter