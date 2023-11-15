import { PlayerModel } from "/js/game/gamemain/livegamesettings/player/playermodel.js";
import { PlayerController } from "/js/game/gamemain/livegamesettings/player/playercontroller.js";
import { PlayerView } from "/js/game/gamemain/livegamesettings/player/playerview.js";

class Player {
  constructor(props) {
    this.model          =   new PlayerModel(props.data);
    this.view           =   new PlayerView();
    this.controller     =   new PlayerController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {Player};