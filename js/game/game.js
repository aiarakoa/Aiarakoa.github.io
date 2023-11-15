import { GameModel } from "/js/game/gamemodel.js";
import { GameController } from "/js/game/gamecontroller.js";
import { GameView } from "/js/game/gameview.js";

class Game {
  constructor(props) {
    this.model          =   new GameModel(props.data);
    this.view           =   new GameView();
    this.controller     =   new GameController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {Game};