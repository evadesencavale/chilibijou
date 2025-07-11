import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SelectionComponent } from '../../../../shared/components/selection-component/selection-component';
import { Question } from '../../../../syllogimous/models/question.models';
import { extractSubjects } from '../../../../syllogimous/utils/question.utils';
import { NBackPremise } from '../../models/memory-nback.models';

@Component({
  selector: 'app-memory-nback-component',
  standalone: true,
  imports: [SelectionComponent],
  templateUrl: './memory-nback-component.html',
  styleUrl: './memory-nback-component.scss',
})
export class MemoryNBackComponent implements OnChanges {
  @Input({ required: true }) question!: Question;
  @Output() nBackAnswered = new EventEmitter<number>();
  customPremises: NBackPremise[] = [];
  rightPremises: NBackPremise[] = [];
  currentAnswer = new NBackPremise([], [], []);
  goodAnswers = 0;
  fillTheBlankIndex = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['question']) {
      this.initFillTheBlank();
    }
  }

  get currentPremise(): NBackPremise {
    return this.customPremises[this.fillTheBlankIndex];
  }

  selectionChanged(value: string, index: number) {
    switch (index) {
      case 1:
        this.currentAnswer.firstSubject = [value];
        break;
      case 2:
        this.currentAnswer.relation = [value];
        break;
      case 3:
        this.currentAnswer.secondSubject = [value];
        break;
    }
  }

  validateFillTheBlank() {
    if (this.checkAnswer()) this.goodAnswers++;
    if (++this.fillTheBlankIndex >= this.customPremises.length) {
      this.nBackAnswered.emit(this.goodAnswers);
    }
  }

  checkAnswer(): boolean {
    for (const rightPremise of this.rightPremises) {
      if (this.currentAnswer.isEquals(rightPremise)) return true;
    }
    return false;
  }

  initFillTheBlank() {
    this.goodAnswers = 0;
    this.fillTheBlankIndex = 0;
    this.customPremises = [];
    this.rightPremises = [];

    const subjects = Array.from(
      new Set(this.question.premises.flatMap((p: string) => extractSubjects(p)))
    );

    const relations = Array.from(
      new Set(
        this.question.premises.flatMap((p: string) => {
          return p.replace(/<span class="subject">(.*?)<\/span>/g, '');
        })
      )
    );

    const questionPremises = [...this.question.premises];
    this.rightPremises = this.question.premises.map((p) =>
      this.extractNBackPremise(p)
    );
    while (questionPremises.length > 0) {
      const nBackPremise = this.extractNBackPremise(
        this.extractRandom(questionPremises)
      );
      this.customPremises.push(nBackPremise);
    }

    for (const premise of this.customPremises) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          premise.firstSubject = subjects;
          break;
        case 1:
          premise.relation = relations;
          break;
        case 2:
          premise.secondSubject = subjects;
          break;
      }
    }
  }

  private extractNBackPremise(premise: string): NBackPremise {
    const subjects = extractSubjects(premise);
    const relation = premise.replace(
      /<span class="subject">(.*?)<\/span>/g,
      ''
    );
    return new NBackPremise([subjects[0]], [relation], [subjects[1]]);
  }

  private extractRandom(list: any[]): any {
    return list.splice(Math.floor(Math.random() * list.length), 1)[0];
  }
}
