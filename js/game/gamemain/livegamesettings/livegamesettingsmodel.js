class LiveGameSettingsModel {
    constructor(data) {
        this.liveGameSettingsID     =   data.liveGameSettingsID;
        data                        ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getLiveGameSettingsID() {return this.liveGameSettingsID;}
}

export { LiveGameSettingsModel };