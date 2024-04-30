const gamesRouter = require("express").Router();

const {
    getAllGames,
} = require("../middlewares/games");
const {
    sendAllGames,
    deleteGame,
    addGameController
} = require("../controllers_game/games");

gamesRouter.get("/games", getAllGames, sendAllGames);

gamesRouter.post(
    "/games",
    getAllGames,
    addGameController
);

gamesRouter.delete(
    "/games/:id",
    getAllGames,
    deleteGame,
);

module.exports = gamesRouter; 