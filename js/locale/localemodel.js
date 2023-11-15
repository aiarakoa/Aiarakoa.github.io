class LocaleModel {
    constructor(data) {
        this.localeAnchorID         =   "locale";
        this.localeID               =   "localeselect";
        this.localeOptions          =   [{text: "EN", value: "en"}, {text: "ES", value: "es"}, {text: "FR", value: "fr"}, {text: "DE", value: "de"}]
        data                        ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getLocaleID() {return this.localeID;}

    getLocaleAnchorID() {return this.localeAnchorID;}

    getLocaleOptions() {return this.localeOptions;}
}

export { LocaleModel };