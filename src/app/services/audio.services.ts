import { Injectable } from '@angular/core';

@Injectable()
export class AudioServices {
    private audio = new Audio();
    
    constructor(){
    }

    setAudio(direccion: string){
        this.audio.src = direccion;
        this.audio.load();
    }
    getAudio(){
        return this.audio;
    }

    play(){
        this.audio.play();
    }
}