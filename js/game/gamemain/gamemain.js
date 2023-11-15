import { GameMainModel } from "/js/game/gamemain/gamemainmodel.js";
import { GameMainController } from "/js/game/gamemain/gamemaincontroller.js";
import { GameMainView } from "/js/game/gamemain/gamemainview.js";

class GameMain {
  constructor(props) {
    this.model          =   new GameMainModel(props.data);
    this.view           =   new GameMainView();
    this.controller     =   new GameMainController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {GameMain};