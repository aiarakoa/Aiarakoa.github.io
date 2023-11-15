import { StartGameModel } from "/js/home/startgame/startgamemodel.js";
import { StartGameController } from "/js/home/startgame/startgamecontroller.js";
import { StartGameView } from "/js/home/startgame/startgameview.js";

class StartGame {
  constructor(props) {
    this.model          =   new StartGameModel(props.data);
    this.view           =   new StartGameView();
    this.controller     =   new StartGameController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {StartGame};