class AudioController {
    constructor(model, view, methods, provider) {
        this.model                              =   model;
        this.view                               =   view;
        this.provider                           =   provider;
        this.provider.startMusic                =   this.startMusic.bind(this);
        this.provider.stopMusic                 =   this.stopMusic.bind(this);
        this.provider.changeMusic               =   this.changeMusic.bind(this);
        this.provider.preOfflineAudioLoader     =   this.preOfflineLoader.bind(this);
        window.addEventListener('mousemove', this.userInteraction.bind(this));
        window.addEventListener('touchmove', this.userInteraction.bind(this));
        window.addEventListener('click', this.userInteraction.bind(this));      
        methods                     ?   Object.keys(methods).forEach(key => this[key] = methods[key])   :   {};
    }

    render() {return this.view.render(this.model.getAppAnchorID(), this.model.getAudioID(), this.model.getSelectedSource(), this.model.getAudioType(), this.provider)};

    startMusic() {return this.view.startMusic()}

    stopMusic() {this.view.stopMusic()}

    changeMusic(newSourceTag) {
        this.model.setSelectedSource(newSourceTag);
        this.view.changeMusic(this.model.getSelectedSource());
    }

    userInteraction() {
        this.provider.userInteraction  ?   {}  :   this.provider.userInteraction = this.startMusic();
    }

    preOfflineLoader() {this.view.preOfflineLoader(this.model.getAudioSources())}
}

export { AudioController };