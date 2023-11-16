class GameboardController {
    constructor(model, view, methods, provider) {
        this.model                  =   model;
        this.view                   =   view;
        this.provider               =   provider;
        this.provider.startStop     =   this.startStop.bind(this);
        this.provider.noMoreMoles   =   this.noMoreMoles.bind(this);
        this.provider.setMsPerMole  =   this.setMillisPerMole.bind(this);
        this.isStopped              =   false;
        methods                     ?   Object.keys(methods).forEach(key => this[key] = methods[key])   :   {};
    }

    render() {return this.view.render(this.model.getGameboardID(), this.model.getCellSuffixes(), this.provider)};

    startStop() {
        this.isStopped              =   !this.isStopped;
        this.newMoleIteration();
    }

    noMoreMoles() {this.isStopped = true;}

    newMoleIteration() {
        let pickedCell = this.getRandomCellID();
        while (this.isMoleIn(pickedCell)) {
            pickedCell              =   this.getRandomCellID();
        }

        this.showThatMole(pickedCell);
    }

    isMoleIn(cellID) {return document.getElementById(cellID).getAttribute('data-mole') === 'on';}

    getRandomCellID() {return this.model.getCellID(Math.floor(Math.random() * this.model.getCellCount()));}

    showThatMole(pickedCell) {
        if(!this.isStopped) {
            document.getElementById(pickedCell).setAttribute('data-mole', 'on');
            setTimeout(() => {document.getElementById(pickedCell).setAttribute('data-mole', 'off');}, this.model.getMillisPerMole());
            setTimeout(() => {this.newMoleIteration()}, this.model.getMillisPerMole());
        }    
    }

    setMillisPerMole(millisTag) {this.model.setMillisPerMole(millisTag);}
}

export { GameboardController };