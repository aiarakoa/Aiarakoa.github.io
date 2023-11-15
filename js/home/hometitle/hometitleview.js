class HomeTitleView {
    constructor() {

    }

    render(homeTitleID) {
        let homeTitle                       =   document.createElement("div");
        let titleHeadingFirstHalf           =   document.createElement("h1");
        let titleHeadingSecondHalf          =   document.createElement("h1");
        let titleYearSubHeading             =   document.createElement("h2");

        this.homeTitleID                    =   homeTitleID;
        homeTitle.id                        =   homeTitleID;
        titleHeadingFirstHalf.textContent   =   "MOLE";
        titleHeadingSecondHalf.textContent  =   "HUNTER";
        titleYearSubHeading.textContent     =   "1980";
        homeTitle.appendChild(titleHeadingFirstHalf);
        homeTitle.appendChild(titleHeadingSecondHalf);
        homeTitle.appendChild(titleYearSubHeading);

        return homeTitle;
    }
}

export { HomeTitleView };