class LocaleView {
    constructor() {

    }

    render(localeAnchorID, localeID, localeOptions, changeHandler) {
        let localeColDiv                    =   document.createElement("div");
        let localeRowDiv                    =   document.createElement("div");
        let localeSelect                    =   document.createElement("select");

        localeColDiv.id                     =   localeAnchorID;
        localeColDiv.setAttribute("data-lang", "en");
        localeRowDiv.id                     =   "localeselectcontainer";
        localeSelect.id                     =   localeID;
        localeOptions.forEach(newOption => {
            let domOption                   =   document.createElement("option");
            domOption.value                 =   newOption.value;
            domOption.text                  =   newOption.text;
            localeSelect.appendChild(domOption);
        })
        localeSelect.addEventListener('change', changeHandler);

        localeRowDiv.appendChild(localeSelect);
        localeColDiv.appendChild(localeRowDiv);

        return localeColDiv;
    }
}

export { LocaleView };