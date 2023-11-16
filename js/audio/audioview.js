class AudioView {
    constructor() {

    }

    render(appAnchorID, audioID, initialAudioSrc, initialAudioType) {
        let audioDiv                    =   document.createElement("div");
        let audio                       =   document.createElement("audio");
        let audioSource                 =   document.createElement("source");

        this.audioID                    =   audioID;
        this.initialAudioSrc            =   initialAudioSrc;
        audioDiv.id                     =   appAnchorID
        audio.id                        =   audioID;
        audioSource.src                 =   initialAudioSrc;
        audioSource.type                =   initialAudioType;
        
        audio.appendChild(audioSource);
        audioDiv.appendChild(audio);

        return audio;
    }

    startMusic() {
        let audio                       =   document.getElementById(this.audioID);
        audio.loop                      =   true;
        audio.play().then(() => {
            alert("all fine");
            return true;
        }).catch(e => {
            console.log(e);
            return false;
        });
    }

    stopMusic() {
        let audio                       =   document.getElementById(this.audioID);
        audio.pause();
        audio.loop                      =   false;
        audio.src                       =   this.initialAudioSrc;
        audio.load();
    }

    changeMusic(source) {
        let audio                       =   document.getElementById(this.audioID);
        audio.src                       =   source;
        audio.load();
        audio.play();
    }
}

export { AudioView };