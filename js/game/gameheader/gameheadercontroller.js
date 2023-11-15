class GameHeaderController {
    constructor(model, view, methods, provider) {
        this.model                  =   model;
        this.view                   =   view;
        methods                     ?   Object.keys(methods).forEach(key => this[key] = methods[key])   :   {};
    }

    render() {return this.view.render(this.model.getGameHeaderID())};
}

export { GameHeaderController };