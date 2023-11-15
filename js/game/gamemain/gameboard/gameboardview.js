import { MoleCell } from "/js/game/gamemain/gameboard/molecell/molecell.js";

class GameboardView {
    constructor() {

    }

    render(gameboardID, cellSuffixes, provider) {
        let gameboard                       =   document.createElement("div");

        this.gameboardID                    =   gameboardID;
        gameboard.id                        =   gameboardID;

        cellSuffixes.forEach(suffix => {
            let moleCell                    =   new MoleCell({data: {moleCellID: `cell${suffix}`}, provider: provider});
            gameboard.appendChild(moleCell.render());
        })

        return gameboard;
    }
}

export { GameboardView };