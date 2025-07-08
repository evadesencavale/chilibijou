import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Question } from '../../../syllogimous/models/question.models';
import { MemorySettingsService } from '../../services/memory-settings.service';

@Component({
  selector: 'app-memory-question-component',
  standalone: true,
  imports: [],
  templateUrl: './memory-question-component.html',
  styleUrl: './memory-question-component.scss',
})
export class MemoryQuestionComponent implements OnChanges {
  @Input({ required: true }) question!: Question;
  @Output() questionAnswered = new EventEmitter<boolean>();

  userAnswer: boolean = false;
  premiseIndex = 0;
  timer: any = null;
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
      this.startQuestionTimer();
    }
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

  get currentConclusion(): string {
    if (Array.isArray(this.question?.conclusion)) {
      return this.question.conclusion.join('\n');
    }
    return this.question?.conclusion ?? '';
  }

  get currentResult(): boolean {
    return this.userAnswer === this.question?.isValid;
  }

  startQuestionTimer() {
    if (this.timer) return;

    this.initQuestion();

    this.timer = setInterval(() => {
      this.nextStep();
    }, this.memorySettingsService.getSettings().premiseDisplayTime * 1000);
  }

  nextStep() {
    if (++this.premiseIndex >= this.question!.premises.length) {
      this.displayConclusion = true;
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  validateAnswer(answer: boolean) {
    this.userAnswer = answer;
    this.isResultCorrect = this.currentResult;
    this.isResultIncorrect = !this.currentResult;
    this.displayResult = true;
    this.questionAnswered.emit(this.currentResult);
  }

  initQuestion() {
    this.isResultCorrect = false;
    this.isResultIncorrect = false;
    this.displayConclusion = false;
    this.displayResult = false;
    this.premiseIndex = 0;
  }
}
