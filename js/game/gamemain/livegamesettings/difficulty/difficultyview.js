class DifficultyView {
    constructor() {

    }

    render(difficultyAnchorID, difficultyOptions, changeHandler) {
        let difficulty                      =   document.createElement("div");
        let difficultyLabel                 =   document.createElement("div");
        let difficultySelectDiv             =   document.createElement("div");
        let difficultySelect                =   document.createElement("select");

        difficulty.id                       =   difficultyAnchorID;
        difficultyLabel.id                  =   "difficultylabel";
        difficultyLabel.classList.add("label");
        difficultySelectDiv.id              =   "difficulty";
        difficultySelect.name               =   "difficult";
        difficultySelect.id                 =   "difficult";
        this.difficultyID                   =   "difficult";
        difficultyOptions.forEach(newOption => {
            let domOption                   =   document.createElement("option");
            domOption.value                 =   newOption.value;
            domOption.id                    =   `hardness${newOption.value}`;
            domOption.text                  =   newOption.text;
            difficultySelect.appendChild(domOption);
        })
        difficultySelect.addEventListener('change', changeHandler);

        difficultySelectDiv.appendChild(difficultySelect);
        difficulty.appendChild(difficultyLabel);
        difficulty.appendChild(difficultySelectDiv);

        return difficulty;
    }

    resetDifficulty(defaultDifficulty) {
        document.getElementById(this.difficultyID).value = defaultDifficulty;
        return defaultDifficulty;
    }

    getDifficultyID() {return this.difficultyID;}

    localizeLevel(difficultyOptions) {
        difficultyOptions.forEach(newOption => document.getElementById(`hardness${newOption.value}`).text = newOption.text)
    }
}

export { DifficultyView };