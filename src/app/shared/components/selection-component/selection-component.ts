import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-selection-component',
  standalone: true,
  imports: [],
  templateUrl: './selection-component.html',
  styleUrl: './selection-component.scss',
})
export class SelectionComponent implements OnChanges {
  @Input({ required: true }) terms!: string[];
  selectedIndex = 0;
  @Output() selectedTermChanged = new EventEmitter<string>();

  showList = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['terms']) {
      this.selectTerm(0);
    }
  }

  get readOnly() {
    return this.terms.length === 1;
  }

  selectTerm(index: number) {
    this.selectedIndex = index;
    this.selectedTermChanged.emit(this.terms[index]);
    this.showList = false;
  }
}
