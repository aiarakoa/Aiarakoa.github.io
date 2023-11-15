import { FinishGameModel } from "/js/game/gamemain/finishgame/finishgamemodel.js";
import { FinishGameController } from "/js/game/gamemain/finishgame/finishgamecontroller.js";
import { FinishGameView } from "/js/game/gamemain/finishgame/finishgameview.js";

class FinishGame {
  constructor(props) {
    this.model          =   new FinishGameModel(props.data);
    this.view           =   new FinishGameView();
    this.controller     =   new FinishGameController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {FinishGame};