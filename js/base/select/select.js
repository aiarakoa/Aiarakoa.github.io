import { SelectModel } from "/js/base/select/selectmodel.js";
import { SelectController } from "/js/base/select/selectcontroller.js";
import { SelectView } from "/js/base/select/selectview.js";

class Select {
  constructor(props) {
    this.model          =   new SelectModel(props.data);
    this.view           =   new SelectView();
    this.controller     =   new SelectController(this.model, this.view, props.methods, props.provider);
  }

  render(renderProps) {return this.controller.render(renderProps);}
}

export {Select};