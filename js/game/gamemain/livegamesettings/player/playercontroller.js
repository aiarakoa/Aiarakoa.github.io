class PlayerController {
    constructor(model, view, methods, provider) {
        this.model                  =   model;
        this.view                   =   view;
        this.provider               =   provider;
        this.provider.updatePlayer  =   this.updatePlayer.bind(this);
        methods                     ?   Object.keys(methods).forEach(key => this[key] = methods[key])   :   {};
    }

    render() {return this.view.render(this.model.getPlayerID())};

    updatePlayer(player) {this.view.updatePlayer(player);}
}

export { PlayerController };