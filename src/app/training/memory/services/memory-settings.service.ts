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
    return JSON.parse(localStorage.getItem('memorySettings') || '{}');
  }

  saveSettings(settings: MemorySettings) {
    localStorage.setItem('memorySettings', JSON.stringify(settings));
  }
}
