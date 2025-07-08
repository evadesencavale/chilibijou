import { Injectable } from '@angular/core';
import { MemorySettings } from '../models/memory-settings.models';

@Injectable({
  providedIn: 'root',
})
export class MemorySettingsService {
  getSettings(): MemorySettings {
    return this.loadSettings();
  }

  private loadSettings(): MemorySettings {
    return JSON.parse(localStorage.getItem('settings') || '{}');
  }

  saveSettings(settings: MemorySettings) {
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
