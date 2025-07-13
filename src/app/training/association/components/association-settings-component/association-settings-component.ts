import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AssociationSettings } from '../../models/association-settings.models';
import { AssociationSettingsService } from '../../services/association-settings.service';

@Component({
  selector: 'app-association-settings-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './association-settings-component.html',
  styleUrl: './association-settings-component.scss',
})
export class AssociationSettingsComponent {
  showSettings = false;
  associationSettings: AssociationSettings;

  constructor(private associationSettingsService: AssociationSettingsService) {
    this.associationSettings = associationSettingsService.getSettings();
  }

  setPremisesCount(value: number) {
    this.associationSettings.premisesCount = value;
    this.associationSettingsService.saveSettings(this.associationSettings);
  }

  setQuestionCount(value: number) {
    this.associationSettings.questionCount = value;
    this.associationSettingsService.saveSettings(this.associationSettings);
  }
}
