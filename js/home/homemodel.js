class HomeModel {
    constructor(data) {
        this.homeID         =   data.homeID;
        this.homeClass      =   data.homeClass;
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getHomeID() {return this.homeID;}

    getHomeClass() {return this.homeClass;}
}

export { HomeModel };