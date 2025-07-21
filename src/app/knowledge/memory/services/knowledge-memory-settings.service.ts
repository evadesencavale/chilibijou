import { Injectable } from '@angular/core';
import { KnowledgeMemorySettings } from '../models/knowledge-memory-settings.models';

@Injectable({
  providedIn: 'root',
})
export class KnowledgeMemorySettingsService {
  getSettings(): KnowledgeMemorySettings {
    return this.loadSettings();
  }

  private loadSettings(): KnowledgeMemorySettings {
    return JSON.parse(localStorage.getItem('knowledgeMemorySettings') || '{}');
  }

  saveSettings(settings: KnowledgeMemorySettings) {
    localStorage.setItem('knowledgeMemorySettings', JSON.stringify(settings));
  }
}
