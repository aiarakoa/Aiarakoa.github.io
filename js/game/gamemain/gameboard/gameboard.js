import { GameboardModel } from "/js/game/gamemain/gameboard/gameboardmodel.js";
import { GameboardController } from "/js/game/gamemain/gameboard/gameboardcontroller.js";
import { GameboardView } from "/js/game/gamemain/gameboard/gameboardview.js";

class Gameboard {
  constructor(props) {
    this.model          =   new GameboardModel(props.data);
    this.view           =   new GameboardView();
    this.controller     =   new GameboardController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}

  preOfflineLoader() {return this.controller.preOfflineLoader()}
}

export {Gameboard};