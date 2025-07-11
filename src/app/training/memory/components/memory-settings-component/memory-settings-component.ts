import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MemorySettings } from '../../models/memory-settings.models';
import { MemorySettingsService } from '../../services/memory-settings.service';

@Component({
  selector: 'app-memory-settings-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './memory-settings-component.html',
  styleUrl: './memory-settings-component.scss',
})
export class MemorySettingsComponent {
  showSettings = false;
  memorySettings: MemorySettings;

  constructor(private memorySettingsService: MemorySettingsService) {
    this.memorySettings = memorySettingsService.getSettings();
  }

  setPremisesCount(value: number) {
    this.memorySettings.premisesCount = value;
    this.memorySettingsService.saveSettings(this.memorySettings);
  }

  setPremiseDisplayTime(value: number) {
    this.memorySettings.premiseDisplayTime = value;
    this.memorySettingsService.saveSettings(this.memorySettings);
  }
}
