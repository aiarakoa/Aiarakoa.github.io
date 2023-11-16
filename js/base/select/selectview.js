class SelectView {
    constructor() {

    }

    render(renderProps) {
        let anchorDiv           =   renderProps.provider.createElement({id: renderProps.anchorID, attribute: renderProps.anchorAttribute, classname: renderProps.anchorClassname});
        let selectContainerDiv  =   renderProps.provider.createElement({id: renderProps.selectContainerID})
        let selectLabel         =   renderProps.provider.createElement({id: renderProps.selectLabelID, classname: renderProps.selectLabelClassname});
        let select              =   renderProps.provider.createSelect({id: renderProps.selectID, selectOptions: renderProps.selectOptions, changeHandler: renderProps.changeHandler});

        this.selectID           =   renderProps.selectID;
        selectContainerDiv.appendChild(select);
        anchorDiv.appendChild(selectLabel);
        anchorDiv.appendChild(selectContainerDiv);

        return anchorDiv;
    }
}

export { SelectView };