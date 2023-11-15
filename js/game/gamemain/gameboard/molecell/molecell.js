import { MoleCellModel } from "/js/game/gamemain/gameboard/molecell/molecellmodel.js";
import { MoleCellController } from "/js/game/gamemain/gameboard/molecell/molecellcontroller.js";
import { MoleCellView } from "/js/game/gamemain/gameboard/molecell/molecellview.js";

class MoleCell {
  constructor(props) {
    this.model          =   new MoleCellModel(props.data);
    this.view           =   new MoleCellView();
    this.controller     =   new MoleCellController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {MoleCell};