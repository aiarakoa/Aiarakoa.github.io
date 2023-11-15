class HomeTitleModel {
    constructor(data) {
        this.homeTitleID    =   data.homeTitleID;
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getHomeTitleID() {return this.homeTitleID;}
}

export { HomeTitleModel };