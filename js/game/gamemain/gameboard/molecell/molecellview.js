class MoleCellView {
    constructor() {

    }

    render(moleCellID, clickHandler) {
        let moleCell                        =   document.createElement("div");

        this.moleCellID                     =   moleCellID;
        moleCell.id                         =   moleCellID;
        moleCell.classList.add('molecell');
        moleCell.setAttribute('data-mole', 'off');
        moleCell.addEventListener('click', clickHandler);

        return moleCell;
    }
}

export { MoleCellView };