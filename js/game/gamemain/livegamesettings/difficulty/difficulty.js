import { Select } from "/js/base/select/select.js";

class Difficulty {
  constructor(props) {
    this.select                       =   new Select({data: props.data, provider: props.provider});
    this.select.model.selectOptions   =   {
      en: [{text: "Low", value: "low"}, {text: "Medium", value: "medium"}, {text: "High", value: "high"}],
      es: [{text: "Bajo", value: "low"}, {text: "Medio", value: "medium"}, {text: "Alto", value: "high"}],
      fr: [{text: "Bas", value: "low"}, {text: "Moyen", value: "medium"}, {text: "Haut", value: "high"}],
      de: [{text: "Einf.", value: "low"}, {text: "Mitt.", value: "medium"}, {text: "Hohes", value: "high"}],
    };

    this.select.model.getDifficultyOptions                  =   this.getDifficultyOptions;

    this.select.model.getDefaultDifficultyOptions           =   this.getDefaultDifficultyOptions;

    this.select.model.getDefaultDifficulty                  =   this.getDefaultDifficulty;

    props.provider.localizeLevel                            =   this.localizeLevel.bind(this);

    props.provider.resetHardness                            =   this.resetDifficulty.bind(this);
  
    this.select.view.resetViewDifficulty                    =   this.resetViewDifficulty;

    this.select.view.localizeViewLevel                      =   this.localizeViewLevel;

    this.select.controller.updateDifficultyRelatedSettings  =   this.updateDifficultyRelatedSettings;
  }

  render() {return this.select.render({
    anchorID: this.select.model.getSelectAnchorID(),
    selectID: this.select.model.getSelectID(),
    selectContainerID: this.select.model.getSelectContainerID(),
    changeHandler: this.changeHandler.bind(this),
    selectLabelID: this.select.model.getSelectLabelID(),
    selectLabelClassname: this.select.model.getSelectLabelClassname(),
    selectOptions: this.select.model.getDefaultDifficultyOptions(),
    provider: this.select.controller.provider
  })};

  // DIFFICULTY-BOUND FUNCTIONS (stay here) //
  changeHandler(event) {
    this.select.controller.updateDifficultyRelatedSettings(event.target.value);
  }

  resetDifficulty() {
    this.select.controller.updateDifficultyRelatedSettings(this.select.view.resetViewDifficulty(this.select.model.getDefaultDifficulty()));
  }

  localizeLevel(lang) {this.select.view.localizeViewLevel(this.select.model.getDifficultyOptions(lang))}
  ////////////////////////////////////////////

  // FUNCTIONS TRANSFERRED TO SelectModel //
  getDifficultyOptions(lang) {return this.selectOptions[lang];}
    
  getDefaultDifficultyOptions() {return this.getDifficultyOptions('en');}

  getDefaultDifficulty() {return this.getDefaultDifficultyOptions()[0].value}
  //////////////////////////////////////////

  // FUNCTIONS TRANSFERRED TO SelectView //
  resetViewDifficulty(defaultDifficulty) {
    document.getElementById(this.selectID).value = defaultDifficulty;
    return defaultDifficulty;
  }

  localizeViewLevel(difficultyOptions) {
      difficultyOptions.forEach(newOption => document.getElementById(`${this.selectID}${newOption.value}`).text = newOption.text)
  }
  /////////////////////////////////////////

  // FUNCTIONS TRANSFERRED TO SelectController //
  updateDifficultyRelatedSettings(difficultyTag) {
    this.provider.changeMusic(difficultyTag);
    this.provider.setMsPerMole(difficultyTag);
    this.provider.setPtsPerHit(difficultyTag);
  }
  ///////////////////////////////////////////////
}

export {Difficulty};