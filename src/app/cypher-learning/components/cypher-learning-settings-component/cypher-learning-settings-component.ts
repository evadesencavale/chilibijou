import { Component } from '@angular/core';
import { CypherLearningSettings } from '../../models/settings';
import { CypherLearningSettingsService } from '../../services/cypher-learning.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cypher-learning-settings-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cypher-learning-settings-component.html',
  styleUrl: './cypher-learning-settings-component.scss'
})
export class CypherLearningSettingsComponent {
  showSettings = false;
  cypherLearningSettings: CypherLearningSettings;

  constructor(
    private cypherLearningSettingsService: CypherLearningSettingsService
  ) {
    this.cypherLearningSettings = cypherLearningSettingsService.getSettings();
  }

  setAudioDelay(value: number) {
    this.cypherLearningSettings.audioDelay = value;
    this.cypherLearningSettingsService.saveSettings(
      this.cypherLearningSettings
    );
  }

  setA1Z26(value: boolean) {
    this.cypherLearningSettings.a1z26 = value;
    this.cypherLearningSettingsService.saveSettings(
      this.cypherLearningSettings
    );
  }
}
