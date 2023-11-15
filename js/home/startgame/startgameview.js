class StartGameView {
    constructor() {

    }

    render(startGameID, placeholder, clickHandler) {
        let startGame                       =   document.createElement("div");
        let input                           =   document.createElement("input");
        let buttonDiv                       =   document.createElement("div");
        let button                          =   document.createElement("button");

        input.id                            =   "playernameinput";
        this.inputID                        =   "playernameinput";
        input.required                      =   true;
        input.autocomplete                  =   "off";
        input.type                          =   "text";
        input.placeholder                   =   placeholder;
        input.minLength                     =   3;
        input.maxLength                     =   15;
        buttonDiv.id                        =   "newgame";
        button.id                           =   "newgamebutton";
        button.classList.add("newgame");
        button.addEventListener('click', clickHandler);
        startGame.id                        =   startGameID;

        buttonDiv.appendChild(button);
        startGame.appendChild(input);
        startGame.appendChild(buttonDiv);

        return startGame;
    }

    localizePlaceholder(placeholder) {document.getElementById(this.inputID).placeholder = placeholder;}
}

export { StartGameView };