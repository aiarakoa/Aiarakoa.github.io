class StartGameController {
    constructor(model, view, methods, provider) {
        this.model                  =   model;
        this.view                   =   view;
        this.provider               =   provider;
        this.provider.localizePH    =   this.localizePlaceholder.bind(this);
        methods                     ?   Object.keys(methods).forEach(key => this[key] = methods[key])   :   {};
    }

    render() {return this.view.render(this.model.getStartGameID(), this.model.getDefaultPlaceholder(), this.clickHandler.bind(this))};

    clickHandler() {
        this.provider.updatePlayer(this.getPlayerName());
        this.provider.startStop();
        this.provider.routeToGame();
    }

    getPlayerName() {
        return document.getElementById('playernameinput').value;
    }

    localizePlaceholder(placeholderID) {
        this.view.localizePlaceholder(this.model.getPlaceholder(placeholderID));
    }
}

export { StartGameController };