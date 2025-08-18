import { Component } from '@angular/core';
import { LineUpComponent } from '../line-up-component/line-up-component';
import { LineUpSettingsComponent } from '../lineup-settings-component/lineup-settings-component';

@Component({
  selector: 'app-race-component',
  imports: [LineUpComponent, LineUpSettingsComponent],
  standalone: true,
  templateUrl: './race-component.html',
  styleUrl: './race-component.scss',
})
export class RaceComponent {}
