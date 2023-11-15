class GameboardModel {
    constructor(data) {
        this.gameboardID    =   data.gameboardID;
        this.cellPrefix     =   'cell';
        this.cellSuffixes   =   ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        this.millisPerMole  =   1000;
        this.millisOptions  =   {'low': 1000, 'medium': 750, 'high': 500}
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getGameboardID() {return this.gameboardID;}

    getCellSuffixes() {return this.cellSuffixes;}

    getCellPrefix() {return this.cellPrefix;}

    getCellID(index) {return `${this.cellPrefix}${this.cellSuffixes[index]}`}

    getCellCount() {return this.cellSuffixes.length;}

    getMillisPerMole() {return this.millisPerMole;}

    setMillisPerMole(millisTag) {this.millisPerMole = this.millisOptions[millisTag];}
}

export { GameboardModel };