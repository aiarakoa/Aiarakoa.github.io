import { GameHeader } from "/js/game/gameheader/gameheader.js";
import { GameMain } from "/js/game/gamemain/gamemain.js";

class GameView {
    constructor() {

    }

    render(gameID, gameClass, provider) {
        let game                        =   document.createElement("div");
        let gameHeader                  =   new GameHeader({data: {gameHeaderID: 'gameheader'}, provider: provider});
        let gameMain                    =   new GameMain({data: {gameMainID: 'gamemain'}, provider: provider});

        this.gameID                     =   gameID;
        game.id                         =   gameID;
        game.classList.add(gameClass);
        game.appendChild(gameHeader.render());
        game.appendChild(gameMain.render());

        return game;
    }
}

export { GameView };