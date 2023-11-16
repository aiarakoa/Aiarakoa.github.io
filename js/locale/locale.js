import { Select } from "/js/base/select/select.js";

class Locale {
  constructor(props) {
    this.select                       =   new Select({data: props.data, provider: props.provider});
    this.select.model.selectOptions   =   [{text: "EN", value: "en"}, {text: "ES", value: "es"}, {text: "FR", value: "fr"}, {text: "DE", value: "de"}];
  }

  render() {return this.select.render({
    anchorID: this.select.model.getSelectAnchorID(),
    anchorClassname: this.select.model.getSelectAnchorClassname(),
    anchorAttribute: {name: "data-lang", value: "en"},
    selectID: this.select.model.getSelectID(),
    selectContainerID: this.select.model.getSelectContainerID(),
    selectOptions: this.select.model.getSelectOptions(),
    changeHandler: this.changeHandler.bind(this),
    provider: this.select.controller.provider
  })};

  changeHandler(event) {
      this.select.controller.provider.localizeViews(event.target.value);
      this.select.controller.provider.localizePH(event.target.value);
      this.select.controller.provider.localizeLevel(event.target.value);
  }
}

export {Locale};