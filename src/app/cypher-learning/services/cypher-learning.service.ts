import { Injectable } from '@angular/core';
import { CypherLearningSettings } from '../models/cypher-learning-settings';

@Injectable({
  providedIn: 'root',
})
export class CypherLearningSettingsService {
  getSettings(): CypherLearningSettings {
    return this.loadSettings();
  }

  private loadSettings(): CypherLearningSettings {
    const raw = JSON.parse(localStorage.getItem('cypherLearningSettings') || '{}');
    return Object.assign(new CypherLearningSettings(), raw);
  }

  saveSettings(settings: CypherLearningSettings) {
    localStorage.setItem('cypherLearningSettings', JSON.stringify(settings));
  }
}
