class FinishGameModel {
    constructor(data) {
        this.finishGameID   =   data.finishGameID;
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getFinishGameID() {return this.finishGameID;}
}

export { FinishGameModel };