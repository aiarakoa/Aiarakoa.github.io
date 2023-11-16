class StartGameModel {
    constructor(data) {
        this.startGameID    =   data.startGameID;
        this.placeholders   =   {en: "Your name (3-15 chars)", es: "Su nombre (3-15 letras)", fr: "Votre nom (3-15 lettres", de: "Ihren Name (3-15 Buchstaben)"}
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getStartGameID() {return this.startGameID;}

    getDefaultPlaceholder() {return this.getPlaceholder('en');}

    getPlaceholder(placeholderID) {return this.placeholders[placeholderID];}
}

export { StartGameModel };