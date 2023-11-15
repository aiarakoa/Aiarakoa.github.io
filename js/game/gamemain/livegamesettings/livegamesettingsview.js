import { Player } from "/js/game/gamemain/livegamesettings/player/player.js";
import { Difficulty } from "/js/game/gamemain/livegamesettings/difficulty/difficulty.js";
import { Score } from "/js/game/gamemain/livegamesettings/score/score.js";

class LiveGameSettingsView {
    constructor() {

    }

    render(liveGameSettingsID, provider) {
        let liveGameSettings                =   document.createElement("div");
        let player                          =   new Player({data: {playerID: 'playerdiv'}, provider: provider});
        let difficulty                      =   new Difficulty({data: {difficultyID: 'difficultydiv'}, provider: provider});
        let score                           =   new Score({data: {scoreID: 'scorediv'}, provider: provider});

        this.liveGameSettings               =   liveGameSettingsID;
        liveGameSettings.id                 =   liveGameSettingsID;
        liveGameSettings.appendChild(player.render());
        liveGameSettings.appendChild(difficulty.render());
        liveGameSettings.appendChild(score.render());

        return liveGameSettings;
    }
}

export { LiveGameSettingsView };