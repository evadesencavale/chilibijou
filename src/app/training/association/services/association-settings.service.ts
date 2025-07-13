import { Injectable } from '@angular/core';
import { AssociationSettings } from '../models/association-settings.models';

@Injectable({
  providedIn: 'root',
})
export class AssociationSettingsService {
  getSettings(): AssociationSettings {
    return this.loadSettings();
  }

  private loadSettings(): AssociationSettings {
    return JSON.parse(localStorage.getItem('associationSettings') || '{}');
  }

  saveSettings(settings: AssociationSettings) {
    localStorage.setItem('associationSettings', JSON.stringify(settings));
  }
}
