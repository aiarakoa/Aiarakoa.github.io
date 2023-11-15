class FinishGameView {
    constructor() {

    }

    render(finishGameID, clickHandler) {
        let finishGame                          =   document.createElement("div");
        let button                              =   document.createElement("button");

        button.id                               =   "finishgamebutton";
        button.classList.add("finishbutton");
        button.addEventListener('click', clickHandler);
        finishGame.id                           =   finishGameID;

        finishGame.appendChild(button);

        return finishGame;
    }
}

export { FinishGameView };