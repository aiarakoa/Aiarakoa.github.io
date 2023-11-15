import { AudioModel } from "/js/audio/audiomodel.js";
import { AudioController } from "/js/audio/audiocontroller.js";
import { AudioView } from "/js/audio/audioview.js";

class Audio {
  constructor(props) {
    this.model          =   new AudioModel(props.data);
    this.view           =   new AudioView();
    this.controller     =   new AudioController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {Audio};