class GameHeaderModel {
    constructor(data) {
        this.gameHeaderID    =   data.gameHeaderID;
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getGameHeaderID() {return this.gameHeaderID;}
}

export { GameHeaderModel };