import { Component } from '@angular/core';
import { A1Z26 } from '../../models/a1z26';
import { AudioClip } from '../../models/audio-clip';
import { Cypher } from '../../models/cypher';
import { NATO } from '../../models/nato';
import { Translation } from '../../models/translation';
import { CypherLearningSettingsService } from '../../services/cypher-learning.service';
import { CypherLearningSettingsComponent } from "../cypher-learning-settings-component/cypher-learning-settings-component";
import { Morse } from '../../models/morse';

@Component({
  selector: 'app-cypher-learning-component',
  standalone: true,
  templateUrl: './cypher-learning-component.html',
  styleUrl: './cypher-learning-component.scss',
  imports: [CypherLearningSettingsComponent]
})
export class CypherLearningComponent {

  audio!: HTMLAudioElement;
  isPlaying = false;
  timer: any = null;
  cypherLearningSettingsService: CypherLearningSettingsService;

  cyphers: Cypher[] = [];
  lastCypher: Cypher | null = null;

  constructor(private service: CypherLearningSettingsService) {
    this.cypherLearningSettingsService = service;

    this.cyphers[0] = new A1Z26();
    this.cyphers[1] = new NATO();
    this.cyphers[2] = new Morse();
  }

  toggleAudio() {
    if (this.isPlaying) {
      this.stopTimer();
    }
    else {
      this.startTimer();
    }
    this.isPlaying = !this.isPlaying;
  }

  timerTick() {
    this.stopTimer();
    var cypher = this.getRandomCypher();
    if(cypher !== this.lastCypher) {
      this.audio = new Audio(cypher.audioName);
      this.audio.addEventListener('ended', () => {
          if (this.isPlaying) {
            this.playAudio(cypher);
          }
        });      
      this.audio.volume = cypher.audioVolume;        
      this.audio.play();
    } else {
      this.playAudio(cypher);
    }
    this.lastCypher = cypher;
  }

  playAudio(cypher: Cypher) {
    var randomTranslation = cypher.getRandomTranslation();
    var [audio1, audio2] = this.getRandomAudios(cypher, randomTranslation);

    this.audio = new Audio(audio1.audioFile);
    this.audio.addEventListener('ended', () => {
      setTimeout(() => {
        this.audio = new Audio(audio2.audioFile);
        this.audio.addEventListener('ended', () => {
          if (this.isPlaying) {
            this.startTimer();
          }
        });
        this.audio.volume = audio2.volume;        
        this.audio.play();
      }, cypher.delay * 1000);
    });
    this.audio.volume = audio1.volume;
    this.audio.play();
  }
  

  startTimer() {
    this.timer = setInterval(() => {
      this.timerTick();
    }, this.cypherLearningSettingsService.getSettings().audioDelay * 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  getRandomAudios(cypher: Cypher, translation: Translation): AudioClip[] {
    var letterAudioClip = new AudioClip(translation.audioLetter, translation.letterVolume);
    var codeAudioClip = new AudioClip(translation.audioCode, translation.codeVolume);
    if(!cypher.testCodeToLetter) {
      return [letterAudioClip, codeAudioClip];
    }  
    else if(!cypher.testLetterToCode) {
      return [codeAudioClip, letterAudioClip];
    }  

    if (Math.random() > 0.5) {
      return [codeAudioClip, letterAudioClip];
    }
    else {
      return [letterAudioClip, codeAudioClip];
    }
  }

  getRandomCypher() {
    var randomCypher = this.cyphers[Math.floor(Math.random() * this.cyphers.length)]; 

    while(!this.cypherLearningSettingsService.getSettings().usage(randomCypher.name)) {
      randomCypher = this.cyphers[Math.floor(Math.random() * this.cyphers.length)];
    }

    return randomCypher;
  }
}
