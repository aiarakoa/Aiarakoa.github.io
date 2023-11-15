class StonksModel {
    constructor(data) {
        this.stonksID       =   data.stonksID;
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getStonksID() {return this.stonksID;}
}

export { StonksModel };