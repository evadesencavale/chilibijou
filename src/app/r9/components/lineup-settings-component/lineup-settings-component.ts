import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LineUpSettingsService } from '../../services/lineup-settings.service';
import { LineUpSettings } from '../../models/lineup-settings.models';

@Component({
  selector: 'app-lineup-settings-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lineup-settings-component.html',
  styleUrl: './lineup-settings-component.scss',
})
export class LineUpSettingsComponent {
  showSettings = false;
  lineupSettings: LineUpSettings;

  constructor(private lineUpSettingsService: LineUpSettingsService) {
    this.lineupSettings = lineUpSettingsService.getSettings();
  }

  setNothing() {
    this.lineupSettings = new LineUpSettings();
    this.lineUpSettingsService.saveSettings(this.lineupSettings);
  }
}
