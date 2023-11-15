class DifficultyController {
    constructor(model, view, methods, provider) {
        this.test                   =   "test";
        this.model                  =   model;
        this.view                   =   view;
        this.provider               =   provider;
        this.provider.resetHardness =   this.resetDifficulty.bind(this);
        this.provider.localizeLevel =   this.localizeLevel.bind(this);
        methods                     ?   Object.keys(methods).forEach(key => this[key] = methods[key])   :   {};
    }

    render() {return this.view.render(this.model.getDifficultyID(), this.model.getDefaultDifficultyOptions(), this.changeHandler.bind(this))};

    changeHandler(event) {
        this.updateDifficultyRelatedSettings(event.target.value);
    }

    updateDifficultyRelatedSettings(difficultyTag) {
        this.provider.changeMusic(difficultyTag);
        this.provider.setMsPerMole(difficultyTag);
        this.provider.setPtsPerHit(difficultyTag);
    }

    resetDifficulty() {
        this.updateDifficultyRelatedSettings(this.view.resetDifficulty(this.model.getDefaultDifficulty()));
    }

    localizeLevel(lang) {this.view.localizeLevel(this.model.getDifficultyOptions(lang))}
}

export { DifficultyController };