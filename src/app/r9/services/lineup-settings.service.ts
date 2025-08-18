import { Injectable } from '@angular/core';
import { LineUpSettings } from '../models/lineup-settings.models';

@Injectable({
  providedIn: 'root',
})
export class LineUpSettingsService {
  getSettings(): LineUpSettings {
    return this.loadSettings();
  }

  private loadSettings(): LineUpSettings {
    return JSON.parse(localStorage.getItem('lineupSettings') || '{}');
  }

  saveSettings(settings: LineUpSettings) {
    localStorage.setItem('lineupSettings', JSON.stringify(settings));
  }
}
