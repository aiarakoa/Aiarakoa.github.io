import { LocaleModel } from "/js/locale/localemodel.js";
import { LocaleController } from "/js/locale/localecontroller.js";
import { LocaleView } from "/js/locale/localeview.js";

class Locale {
  constructor(props) {
    this.model          =   new LocaleModel(props.data);
    this.view           =   new LocaleView();
    this.controller     =   new LocaleController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {Locale};