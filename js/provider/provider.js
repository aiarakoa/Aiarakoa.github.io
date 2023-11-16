class Provider {
    constructor() {
        this.defaultElementProps        =   {
            type: "div",
            id: "",
            classname: ""
        };
        this.homeViewID                 =   "home";
        this.gameViewID                 =   "game";
    }

    addSharedVariable(varID, varInitialValue) {this[varID] = varInitialValue;}

    createElement(elementProps) {
        let props                       =   {...this.defaultElementProps, ...elementProps};
        let element                     =   document.createElement(props.type);

        element.id                      =   props.id;
        props.classname                 ?   element.classList.add(props.classname)  :   {};
        props.attribute                 ?   element.setAttribute(props.attribute.name, props.attribute.value)    :   {};

        return element;
    };

    createSelect(selectProps) {
        let props                       =   {...selectProps, type: "select"};
        let selectElement               =   this.createElement(props);

        props.selectOptions.forEach(newOption => {
            let domOption                   =   document.createElement("option");
            domOption.value                 =   newOption.value;
            domOption.text                  =   newOption.text;
            domOption.id                    =   `${props.id}${newOption.value}`;
            selectElement.appendChild(domOption);
        })

        selectElement.addEventListener('change', props.changeHandler);

        return selectElement;
    }

    localizeViews(lang) {
        document.getElementById(this.homeViewID).setAttribute("data-lang", lang);
        document.getElementById(this.gameViewID).setAttribute("data-lang", lang);
    }
}

export { Provider };