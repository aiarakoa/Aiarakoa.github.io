class ScoreView {
    constructor() {

    }

    render(scoreAnchorID, scorePoints) {
        let score                       =   document.createElement("div");
        let scoreLabel                  =   document.createElement("div");
        let scorePointsDiv              =   document.createElement("div");

        score.id                        =   scoreAnchorID;
        scoreLabel.id                   =   "scorelabel";
        scoreLabel.classList.add("label");
        scorePointsDiv.id               =   "score"
        this.scoreID                    =   "score";
        scorePointsDiv.classList.add("value");
        scorePointsDiv.textContent      =   scorePoints;

        score.appendChild(scoreLabel);
        score.appendChild(scorePointsDiv);

        return score;
    }

    updateScore(newScore) {document.getElementById(this.scoreID).textContent = newScore;}
}

export { ScoreView };