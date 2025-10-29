import { Component } from '@angular/core';
import { A1Z26 } from '../../models/a1z26';
import { FormsModule } from '@angular/forms';
import { CypherLearningSettingsService } from '../../services/cypher-learning.service';
import { CypherLearningSettingsComponent } from "../cypher-learning-settings-component/cypher-learning-settings-component";

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

  constructor(private service: CypherLearningSettingsService) {
    this.cypherLearningSettingsService = service;
  }

  toggleAudio() {
    if(this.isPlaying) {
      clearInterval(this.timer);
      this.timer = null;
    }
    else {
    this.timer = setInterval(() => {
      this.playAudio();
    }, this.cypherLearningSettingsService.getSettings().audioDelay * 1000);
    }
    this.isPlaying = !this.isPlaying;
  }

  playAudio() {
    var a1z26 = new A1Z26();
    this.audio = new Audio(a1z26.getRandomAudio());
    this.audio.play();
  }
}
