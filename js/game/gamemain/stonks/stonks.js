import { StonksModel } from "/js/game/gamemain/stonks/stonksmodel.js";
import { StonksController } from "/js/game/gamemain/stonks/stonkscontroller.js";
import { StonksView } from "/js/game/gamemain/stonks/stonksview.js";

class Stonks {
  constructor(props) {
    this.model          =   new StonksModel(props.data);
    this.view           =   new StonksView();
    this.controller     =   new StonksController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {Stonks};