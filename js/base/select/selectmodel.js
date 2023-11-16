class SelectModel {
    constructor(data) {
        this.selectAnchorID             =   data.selectAnchorID;
        this.selectAnchorClassname      =   data.selectAnchorClassname;
        this.selectID                   =   data.selectID;
        this.selectClassname            =   data.selectClassname;
        this.selectLabelID              =   data.selectLabelID;
        this.selectLabelClassname       =   data.selectLabelClassname;
        this.selectContainerID          =   data.selectContainerID;
        this.selectContainerClassname   =   data.selectContainerClassname;
        this.selectOptions              =   data.selectOptions;
        data                            ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getSelectAnchorID() {return this.selectAnchorID;}

    getSelectAnchorClassname() {return this.selectAnchorClassname;}

    getSelectID() {return this.selectID;}

    getSelectClassname() {return this.selectClassname;}

    getSelectLabelID() {return this.selectLabelID;}

    getSelectLabelClassname() {return this.selectLabelClassname;}

    getSelectContainerID() {return this.selectContainerID;}

    getSelectContainerClassname() {return this.selectContainerClassname;}

    getSelectOptions() {return this.selectOptions;}
}

export { SelectModel };