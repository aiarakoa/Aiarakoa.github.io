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

    getAudioSrc(source) {console.log(`sourceTag ${source}, source ${this.audioSources[source]}`); return this.audioSources[source];}

    getSelectedSource() {console.log(`current sourceTag ${this.selectedSrc}`); return this.getAudioSrc(this.selectedSrc);}

    getAppAnchorID() {return this.appAnchorID;}

    getAudioType() {return this.audioType;}

    setSelectedSource(sourceID) {console.log(`previous sourceTag ${this.selectedSrc}, new sourceTag ${sourceID}`); this.selectedSrc = sourceID;}
}

export { AudioModel };