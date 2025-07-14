import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premise-component',
  standalone: true,
  imports: [],
  templateUrl: './premise-component.html',
  styleUrl: './premise-component.scss',
})
export class PremiseComponent {
  @Input({ required: true }) premise!: string;
}
