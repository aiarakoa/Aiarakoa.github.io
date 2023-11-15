class DifficultyModel {
    constructor(data) {
        this.difficultyID       =   data.difficultyID;
        this.difficultyOptions  =   {
            en: [{text: "Low", value: "low"}, {text: "Medium", value: "medium"}, {text: "High", value: "high"}],
            es: [{text: "Bajo", value: "low"}, {text: "Medio", value: "medium"}, {text: "Alto", value: "high"}],
            fr: [{text: "Bas", value: "low"}, {text: "Moyen", value: "medium"}, {text: "Haut", value: "high"}],
            de: [{text: "Einf.", value: "low"}, {text: "Mitt.", value: "medium"}, {text: "Hohes", value: "high"}],
        }
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getDifficultyID() {return this.difficultyID;}

    getDifficultyOptions(lang) {console.log(this.difficultyOptions); return this.difficultyOptions[lang];}
    
    getDefaultDifficultyOptions() {console.log(this.difficultyOptions); console.log(`default options: ${this.getDifficultyOptions['en']}`); return this.getDifficultyOptions('en');}

    getDefaultDifficulty() {return this.getDefaultDifficultyOptions()[0].value}
}

export { DifficultyModel };