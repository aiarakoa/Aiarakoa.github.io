class StonksController {
    constructor(model, view, methods, provider) {
        this.model                  =   model;
        this.view                   =   view;
        this.provider               =   provider;
        this.provider.stonk         =   this.stonk.bind(this);
        this.provider.destonk       =   this.destonk.bind(this);
        methods                     ?   Object.keys(methods).forEach(key => this[key] = methods[key])   :   {};
    }

    render() {return this.view.render(this.model.getStonksID())};

    stonk() {
        this.view.stonk();
        setTimeout(() => this.destonk(), 100);
    }

    destonk() {this.view.destonk();}
}

export { StonksController };