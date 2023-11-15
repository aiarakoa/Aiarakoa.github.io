class StartStopController {
    constructor(model, view, methods, provider) {
        this.model                  =   model;
        this.view                   =   view;
        this.provider               =   provider;
        this.provider.resetResume   =   this.resetResume.bind(this);
        methods                     ?   Object.keys(methods).forEach(key => this[key] = methods[key])   :   {};
    }

    render() {return this.view.render(this.model.getStartStopID(), this.clickHandler.bind(this))};

    clickHandler() {
        this.provider.startStop();
        this.toggleResume();
//        event.target.setAttribute("data-started", "yes");
    }

    toggleResume() {this.view.toggleResume()}

    resetResume() {this.view.resetResume()}
}

export { StartStopController };