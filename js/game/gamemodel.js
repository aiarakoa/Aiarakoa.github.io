class GameModel {
    constructor(data) {
        this.gameID         =   data.gameID;
        this.gameClass      =   data.gameClass;
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getGameID() {return this.gameID;}

    getGameClass() {return this.gameClass;}
}

export { GameModel };