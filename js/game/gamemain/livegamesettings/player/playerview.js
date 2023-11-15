class PlayerView {
    constructor() {

    }

    render(playerID) {
        let player                          =   document.createElement("div");
        let playerLabel                     =   document.createElement("div");
        let playerValue                     =   document.createElement("div");

        player.id                           =   playerID;
        playerLabel.id                      =   "playerlabel";
        playerLabel.classList.add("label");
        playerValue.id                      =   "player";
        this.playerID                       =   "player";
        playerValue.classList.add("value");
        playerValue.textContent             =   "Player"

        player.appendChild(playerLabel);
        player.appendChild(playerValue);

        return player;
    }

    updatePlayer(player) {document.getElementById(this.playerID).textContent = player;}
}

export { PlayerView };