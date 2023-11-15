class GameHeaderView {
    constructor() {

    }

    render(gameHeaderID) {
        let gameHeader                      =   document.createElement("header");
        let gameName                        =   document.createElement("span");
        let gameNameYear                    =   document.createElement("span");

        this.gameHeaderID                   =   gameHeaderID;

        gameHeader.id                       =   gameHeaderID;
        gameName.classList.add("gamedivname");
        gameName.textContent                =   "MOLE HUNTER";
        gameNameYear.classList.add("gamedivsurname");
        gameNameYear.textContent            =   "1980";
        gameHeader.appendChild(gameName);
        gameHeader.appendChild(gameNameYear);

        return gameHeader;
    }
}

export { GameHeaderView };