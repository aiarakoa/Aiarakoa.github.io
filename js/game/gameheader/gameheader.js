import { GameHeaderModel } from "/js/game/gameheader/gameheadermodel.js";
import { GameHeaderController } from "/js/game/gameheader/gameheadercontroller.js";
import { GameHeaderView } from "/js/game/gameheader/gameheaderview.js";

class GameHeader {
  constructor(props) {
    this.model          =   new GameHeaderModel(props.data);
    this.view           =   new GameHeaderView();
    this.controller     =   new GameHeaderController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {GameHeader};