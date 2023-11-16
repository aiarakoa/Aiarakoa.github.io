class AudioModel {
    constructor(data) {
        this.appAnchorID    =   data.appAnchorID;
        this.audioID        =   "myAudio";
        this.audioType      =   "audio/ogg";
        this.selectedSrc    =   "low";
        this.audioSources   =   {'low': '/audio/bluelow.ogg', 'medium': '/audio/bluemedium.ogg', 'high': '/audio/bluehigh.ogg'}
        data                ?   Object.keys(data).forEach(key => this[key] = data[key])   :   {};
    }

    getAudioID() {return this.audioID;}

    getAudioSrc(source) {return this.audioSources[source];}

    getSelectedSource() {return this.getAudioSrc(this.selectedSrc);}

    getAppAnchorID() {return this.appAnchorID;}

    getAudioType() {return this.audioType;}

    setSelectedSource(sourceID) {this.selectedSrc = sourceID;}

    getAudioSources() {return this.audioSources;}    
}

export { AudioModel };