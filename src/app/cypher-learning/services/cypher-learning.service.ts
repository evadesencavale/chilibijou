import { Injectable } from '@angular/core';
import { CypherLearningSettings } from '../models/settings';

@Injectable({
  providedIn: 'root',
})
export class CypherLearningSettingsService {
  getSettings(): CypherLearningSettings {
    return this.loadSettings();
  }

  private loadSettings(): CypherLearningSettings {
    return JSON.parse(localStorage.getItem('cypherLearningSettings') || '{}');
  }

  saveSettings(settings: CypherLearningSettings) {
    localStorage.setItem('cypherLearningSettings', JSON.stringify(settings));
  }
}
