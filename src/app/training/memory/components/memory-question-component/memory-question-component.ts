import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MemorySettingsService } from '../../services/memory-settings.service';
import { MemoryNBackComponent } from '../memory-nback-component/memory-nback-component';
import { Question } from '../../../../syllogimous/models/question.models';
import { ConclusionComponent } from '../../../shared/conclusion-component/conclusion-component';
import { PremiseComponent } from '../../../shared/premise-component/premise-component';

@Component({
  selector: 'app-memory-question-component',
  standalone: true,
  imports: [MemoryNBackComponent, ConclusionComponent, PremiseComponent],
  templateUrl: './memory-question-component.html',
  styleUrl: './memory-question-component.scss',
})
export class MemoryQuestionComponent implements OnChanges {
  @Input({ required: true }) question!: Question;
  @Output() questionAnswered = new EventEmitter<number>();

  premiseIndex = 0;
  timer: any = null;

  displayFillTheBlank = false;
  rightNBackAnswers = 0;

  displayConclusion = false;
  displayResult = false;
  isResultCorrect = false;
  isResultIncorrect = false;

  constructor(private memorySettingsService: MemorySettingsService) {}

  get isDone() {
    return this.displayResult;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['question']) {
      this.initQuestion();
      this.startQuestionTimer();
    }
  }

  onNBackAnswered(rightAnswers: number) {
    this.rightNBackAnswers = rightAnswers;
    this.displayFillTheBlank = false;
    this.displayConclusion = true;
  }

  get currentPremise(): string {
    return this.question?.premises[this.premiseIndex] ?? '';
  }

  get currentQuestionType(): string {
    return this.question?.type ?? '';
  }

  get currentInstruction(): string {
    if (Array.isArray(this.question?.instructions)) {
      return this.question.instructions.join('\n');
    }
    return this.question?.instructions ?? '';
  }

  startQuestionTimer() {
    if (this.timer) return;

    this.initPremises();

    this.timer = setInterval(() => {
      this.nextPremises();
    }, this.memorySettingsService.getSettings().premiseDisplayTime * 1000);
  }

  nextPremises() {
    if (++this.premiseIndex >= this.question!.premises.length) {
      this.initFillTheBlank();
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  initFillTheBlank() {
    this.displayFillTheBlank = true;
    this.rightNBackAnswers = 0;
  }

  initQuestion() {
    this.isResultCorrect = false;
    this.isResultIncorrect = false;
    this.displayFillTheBlank = false;
    this.displayConclusion = false;
    this.displayResult = false;
  }

  initPremises() {
    this.premiseIndex = 0;
  }

  onQuestionAnswered(result: boolean) {
    this.isResultCorrect = result;
    this.isResultIncorrect = !result;
    this.displayResult = true;
    this.questionAnswered.emit(
      result ? this.rightNBackAnswers + 1 : this.rightNBackAnswers
    );
  }
}
