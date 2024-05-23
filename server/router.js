const RouterClass = require('express').Router;

const Users = require("./api/users.js");
const Characters = require("./api/characters.js");
const Groups = require("./api/groups.js");
const Compendium = require("./api/compendium.js");
const Items = require("./api/items.js");

const mainRouter = new RouterClass();

// Users
mainRouter.get('/user/list', Users.getAllUsers);
mainRouter.get('/user/user_id/:user_id', Users.getUserById);
mainRouter.post('/user/login', Users.postUserForLogin);
mainRouter.post('/user/register', Users.postNewUser);

// Characters
mainRouter.get('/character/uid/:uid', Characters.getCharactersOfUser);
mainRouter.get('/character/character_id/:character_id', Characters.getCharacterById);
mainRouter.get('/character/characters_in_group/:group_id', Characters.getCharactersInGroup);
mainRouter.post('/character/newCharacter', Characters.postNewCharacter)
mainRouter.post('/character/inventory/addItem', Characters.postCharacterItem);
mainRouter.delete('/character/deleteCharacter/:character_id', Characters.deleteCharacter);

// Groups
mainRouter.get('/group/:group_id', Groups.getGroupById);
mainRouter.get('/group/user/:user_id', Groups.getGroupByUser);
mainRouter.get('/group/dm/:user_id', Groups.getGroupByDM);
mainRouter.post('/group/newGroup', Groups.postNewGroup);

// Compendium
mainRouter.get('/compendium/classes/list', Compendium.getClassesList);
mainRouter.get('/compendium/races/list', Compendium.getRacesList);
mainRouter.get('/compendium/weapons/list', Compendium.getWeaponsList);
mainRouter.get('/compendium/armor/list', Compendium.getArmorList);
mainRouter.get('/compendium/classes/getClassById/:id', Compendium.getClassById);
mainRouter.get('/compendium/races/getRaceById/:id', Compendium.getRaceById);
mainRouter.get('/compendium/items/getItemById/:id', Compendium.getItemById);

// Items
mainRouter.get('/items/getItemsInInventory/:character_id', Items.getItemsInInventory);

module.exports.mainRouter = mainRouter