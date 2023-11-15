class Provider {
    constructor() {

    }

    addSharedVariable(varID, varInitialValue) {this[varID] = varInitialValue;}
}

export { Provider };