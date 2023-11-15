import { HomeTitleModel } from "/js/home/hometitle/hometitlemodel.js";
import { HomeTitleController } from "/js/home/hometitle/hometitlecontroller.js";
import { HomeTitleView } from "/js/home/hometitle/hometitleview.js";

class HomeTitle {
  constructor(props) {
    this.model          =   new HomeTitleModel(props.data);
    this.view           =   new HomeTitleView();
    this.controller     =   new HomeTitleController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {HomeTitle};