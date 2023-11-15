class MoleCellModel {
    constructor(data) {
        this.moleCellID     =   data.moleCellID;
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getMoleCellID() {return this.moleCellID;}
}

export { MoleCellModel };