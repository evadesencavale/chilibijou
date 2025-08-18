import { Component } from '@angular/core';
import { Paddler } from '../../models/paddler.models';
import { LineUpSettingsService } from '../../services/lineup-settings.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { LineUp } from '../../models/lineup-models';
import { LineUpSettings } from '../../models/lineup-settings.models';

@Component({
  selector: 'app-line-up-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './line-up-component.html',
  styleUrl: './line-up-component.scss',
})
export class LineUpComponent {
  dropdowns: Paddler[][] = [];
  paddlers: Paddler[] = [];
  lineupSettings: LineUpSettings;

  rightTotal = 0;
  leftTotal = 0;
  diff = 0;
  total = 0;

  currentLineUp = new LineUp(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  trackById = (_: number, item: Paddler) => item.name;

  constructor(private service: LineUpSettingsService) {
    this.lineupSettings = service.getSettings();
    this.currentLineUp = this.lineupSettings.lineup ?? this.currentLineUp;
    console.log('Load', this.lineupSettings, this.currentLineUp);
    this.paddlers = LineUpSettings.ALL_PADDLERS;
    this.dropdowns = Array(15).fill(this.paddlers);
  }

  updateTotal() {
    [this.leftTotal, this.rightTotal, this.diff, this.total] = [
      this.currentLineUp.totalL(),
      this.currentLineUp.totalR(),
      this.currentLineUp.totalLR(),
      this.currentLineUp.totalFB(this.service.getSettings()),
    ];
    this.lineupSettings.lineup = this.currentLineUp;
    this.service.saveSettings(this.lineupSettings);
    console.log('Save', this.lineupSettings);
  }

  switch(b: number) {
    if (b === 1) {
      [this.currentLineUp.b1L, this.currentLineUp.b1R] = [
        this.currentLineUp.b1R,
        this.currentLineUp.b1L,
      ];
    }
    if (b === 2) {
      [this.currentLineUp.b2L, this.currentLineUp.b2R] = [
        this.currentLineUp.b2R,
        this.currentLineUp.b2L,
      ];
    }
    if (b === 3) {
      [this.currentLineUp.b3L, this.currentLineUp.b3R] = [
        this.currentLineUp.b3R,
        this.currentLineUp.b3L,
      ];
    }
    if (b === 4) {
      [this.currentLineUp.b4L, this.currentLineUp.b4R] = [
        this.currentLineUp.b4R,
        this.currentLineUp.b4L,
      ];
    }

    this.updateTotal();
  }

  onDropdownKeydown(event: KeyboardEvent, model: NgModel) {
    if (event.key === 'Delete') {
      model.reset(null);
      this.updateTotal();
      event.preventDefault();
    }
  }
}
