import { LiveGameSettings } from "/js/game/gamemain/livegamesettings/livegamesettings.js";
import { Stonks } from "/js/game/gamemain/stonks/stonks.js";
import { Gameboard } from "/js/game/gamemain/gameboard/gameboard.js";
import { StartStop } from "/js/game/gamemain/startstop/startstop.js";
import { FinishGame } from "/js/game/gamemain/finishgame/finishgame.js";

class GameMainView {
    constructor() {

    }

    render(gameMainID, provider) {
        let gameMain                        =   document.createElement("main");
        let liveGameSettings                =   new LiveGameSettings({data: {liveGameSettingsID: 'livegamesettings'}, provider: provider});
        let stonks                          =   new Stonks({data: {stonksID: 'stonks'}, provider: provider});
        let gameboard                       =   new Gameboard({data: {gameboardID: 'gameboard'}, provider: provider});
        let startStop                       =   new StartStop({data: {startStopID: 'startstop'}, provider: provider});
        let finishGame                      =   new FinishGame({data: {finishGameID: 'finishgame'}, provider: provider});

        this.gameMainID                     =   gameMainID;
        gameMain.id                         =   gameMainID;
        gameMain.appendChild(liveGameSettings.render());
        gameMain.appendChild(stonks.render());
        gameMain.appendChild(gameboard.render());
        gameMain.appendChild(startStop.render());
        gameMain.appendChild(finishGame.render());

        return gameMain;
    }
}

export { GameMainView };