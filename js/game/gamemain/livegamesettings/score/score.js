import { ScoreModel } from "/js/game/gamemain/livegamesettings/score/scoremodel.js";
import { ScoreController } from "/js/game/gamemain/livegamesettings/score/scorecontroller.js";
import { ScoreView } from "/js/game/gamemain/livegamesettings/score/scoreview.js";

class Score {
  constructor(props) {
    this.model          =   new ScoreModel(props.data);
    this.view           =   new ScoreView();
    this.controller     =   new ScoreController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {Score};