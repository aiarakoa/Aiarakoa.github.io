class FinishGameController {
    constructor(model, view, methods, provider) {
        this.model                  =   model;
        this.view                   =   view;
        this.provider               =   provider;
        methods                     ?   Object.keys(methods).forEach(key => this[key] = methods[key])   :   {};
    }

    render() {return this.view.render(this.model.getFinishGameID(), this.clickHandler.bind(this))};

    clickHandler() {
//        this.provider.stopMusic();
        this.provider.resetScore();
        this.provider.resetResume();
        this.provider.resetHardness();
        this.provider.noMoreMoles();
        this.provider.routeToHome();
    }
}

export { FinishGameController };