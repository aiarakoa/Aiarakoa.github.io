class ScoreModel {
    constructor(data) {
        this.scoreID        =   data.scoreID;
        this.scorePoints    =   0;
        this.pointsPerHit   =   10;
        this.hpOptions      =   {'low': 10, 'medium': 20, 'high': 30};
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getScoreID() {return this.scoreID;}

    getScorePoints() {return this.scorePoints;}

    resetScore() {this.scorePoints = 0; return this.scorePoints;}

    updateScore() {this.scorePoints += this.pointsPerHit; return this.scorePoints;}

    setPointsPerHit(pointsTag) {this.pointsPerHit = this.hpOptions[pointsTag];}
}

export { ScoreModel };