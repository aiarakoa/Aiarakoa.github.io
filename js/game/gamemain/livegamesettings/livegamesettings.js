import { LiveGameSettingsModel } from "/js/game/gamemain/livegamesettings/livegamesettingsmodel.js";
import { LiveGameSettingsController } from "/js/game/gamemain/livegamesettings/livegamesettingscontroller.js";
import { LiveGameSettingsView } from "/js/game/gamemain/livegamesettings/livegamesettingsview.js";

class LiveGameSettings {
  constructor(props) {
    this.model          =   new LiveGameSettingsModel(props.data);
    this.view           =   new LiveGameSettingsView();
    this.controller     =   new LiveGameSettingsController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {LiveGameSettings};