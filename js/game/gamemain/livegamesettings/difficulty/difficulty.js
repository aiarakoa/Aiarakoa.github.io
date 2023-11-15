import { DifficultyModel } from "/js/game/gamemain/livegamesettings/difficulty/difficultymodel.js";
import { DifficultyController } from "/js/game/gamemain/livegamesettings/difficulty/difficultycontroller.js";
import { DifficultyView } from "/js/game/gamemain/livegamesettings/difficulty/difficultyview.js";

class Difficulty {
  constructor(props) {
    this.model          =   new DifficultyModel(props.data);
    this.view           =   new DifficultyView();
    this.controller     =   new DifficultyController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {Difficulty};