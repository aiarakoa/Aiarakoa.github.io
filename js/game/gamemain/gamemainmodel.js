class GameMainModel {
    constructor(data) {
        this.gameMainID     =   data.gameMainID;
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getGameMainID() {return this.gameMainID;}
}

export { GameMainModel };