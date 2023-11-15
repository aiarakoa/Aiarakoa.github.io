class MoleCellController {
    constructor(model, view, methods, provider) {
        this.model                  =   model;
        this.view                   =   view;
        this.provider               =   provider;
        methods                     ?   Object.keys(methods).forEach(key => this[key] = methods[key])   :   {};
    }

    render() {return this.view.render(this.model.getMoleCellID(), this.clickHandler.bind(this))};

    clickHandler(event) {
        event.target.getAttribute('data-mole') === 'on' ?   this.stonk(event)    :   {}
    }

    stonk(event) {
        event.target.setAttribute('data-mole', 'off');
        this.provider.stonk();
        this.provider.updateScore();
    }
}

export { MoleCellController };