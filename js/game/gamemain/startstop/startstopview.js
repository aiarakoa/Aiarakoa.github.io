class StartStopView {
    constructor() {

    }

    render(startStopID, clickHandler) {
        let startStop                       =   document.createElement("div");
        let button                          =   document.createElement("button");

        startStop.id                        =   startStopID;
        button.id                           =   "startstopbutton";
        this.buttonID                       =   "startstopbutton";
        button.classList.add("startbutton");
        button.setAttribute("data-started", "no");
        button.addEventListener('click', clickHandler);

        startStop.appendChild(button);

        return startStop;
    }

    toggleResume() {
        this.isPaused()                     ?   document.getElementById(this.buttonID).classList.replace("stopbutton", "startbutton") :   document.getElementById(this.buttonID).classList.replace("startbutton", "stopbutton");
    }

    isPaused() {return document.getElementById(this.buttonID).classList.contains('stopbutton');}

    resetResume() {
        document.getElementById(this.buttonID).classList.replace("startbutton", "stopbutton")
    }
}

export { StartStopView };