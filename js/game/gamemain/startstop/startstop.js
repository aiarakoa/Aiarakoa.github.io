import { StartStopModel } from "/js/game/gamemain/startstop/startstopmodel.js";
import { StartStopController } from "/js/game/gamemain/startstop/startstopcontroller.js";
import { StartStopView } from "/js/game/gamemain/startstop/startstopview.js";

class StartStop {
  constructor(props) {
    this.model          =   new StartStopModel(props.data);
    this.view           =   new StartStopView();
    this.controller     =   new StartStopController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {StartStop};