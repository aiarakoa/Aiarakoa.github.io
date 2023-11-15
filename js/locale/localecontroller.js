class LocaleController {
    constructor(model, view, methods, provider) {
        this.model                  =   model;
        this.view                   =   view;
        this.isThereUserInteraction =   false;
        this.provider               =   provider;
        methods                     ?   Object.keys(methods).forEach(key => this[key] = methods[key])   :   {};
    }

    render() {return this.view.render(this.model.getLocaleAnchorID(), this.model.getLocaleID(), this.model.getLocaleOptions(), this.changeHandler.bind(this))};

    changeHandler(event) {
        document.getElementById("home").setAttribute("data-lang", event.target.value);
        document.getElementById("game").setAttribute("data-lang", event.target.value);
        this.provider.localizePH(event.target.value);
        this.provider.localizeLevel(event.target.value);
    }
}

export { LocaleController };