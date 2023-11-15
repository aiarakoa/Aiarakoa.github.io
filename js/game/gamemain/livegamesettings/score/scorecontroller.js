class ScoreController {
    constructor(model, view, methods, provider) {
        this.model                  =   model;
        this.view                   =   view;
        this.provider               =   provider;
        this.provider.resetScore    =   this.resetScore.bind(this);
        this.provider.setPtsPerHit  =   this.setPointsPerHit.bind(this);
        this.provider.updateScore   =   this.updateScore.bind(this);
        methods                     ?   Object.keys(methods).forEach(key => this[key] = methods[key])   :   {};
    }

    render() {return this.view.render(this.model.getScoreID(), this.model.getScorePoints())};

    resetScore() {this.view.updateScore(this.model.resetScore());}

    setPointsPerHit(pointsTag) {this.model.setPointsPerHit(pointsTag);}

    updateScore() {this.view.updateScore(this.model.updateScore());}
}

export { ScoreController };