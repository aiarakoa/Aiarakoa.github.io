class StonksView {
    constructor() {

    }

    render(stonksID) {
        let stonks                          =   document.createElement("div");

        this.stonksID                       =   stonksID;
        stonks.id                           =   stonksID;
        stonks.classList.add("nostonks");

        return stonks;
    }

    stonk() {document.getElementById(this.stonksID).classList.replace('nostonks','stonks')}

    destonk() {document.getElementById(this.stonksID).classList.replace('stonks','nostonks')}
}

export { StonksView };