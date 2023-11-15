import { HomeModel } from "/js/home/homemodel.js";
import { HomeController } from "/js/home/homecontroller.js";
import { HomeView } from "/js/home/homeview.js";

class Home {
  constructor(props) {
    this.model          =   new HomeModel(props.data);
    this.view           =   new HomeView();
    this.controller     =   new HomeController(this.model, this.view, props.methods, props.provider);
  }

  render() {return this.controller.render();}
}

export {Home};