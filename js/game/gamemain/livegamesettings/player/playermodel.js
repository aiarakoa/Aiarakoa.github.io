class PlayerModel {
    constructor(data) {
        this.playerID     =   data.playerID;
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getPlayerID() {return this.playerID;}
}

export { PlayerModel };