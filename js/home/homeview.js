import { HomeTitle } from "/js/home/hometitle/hometitle.js";
import { StartGame } from "/js/home/startgame/startgame.js";

class HomeView {
    constructor() {

    }

    render(homeID, homeClass, provider) {
        let home                     =   document.createElement("div");
        let homeTitle                =   new HomeTitle({data: {homeTitleID: 'hometitle'}, provider: provider});
        let startGame                =   new StartGame({data: {startGameID: 'startgame'}, provider: provider});

        this.homeID                  =   homeID;
        home.id                      =   homeID;
        home.classList.add(homeClass);

        home.appendChild(homeTitle.render());
        home.appendChild(startGame.render());

        return home;
    }
}

export { HomeView };