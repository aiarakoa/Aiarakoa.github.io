class StartStopModel {
    constructor(data) {
        this.startStopID    =   data.startStopID;
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getStartStopID() {return this.startStopID;}
}

export { StartStopModel };