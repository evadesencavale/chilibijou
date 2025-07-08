import { AfterViewInit, Component } from '@angular/core';
import { Question } from '../../syllogimous/models/question.models';
import { SyllogimousService } from '../../syllogimous/services/syllogimous.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-memory-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './memory-component.html',
  styleUrl: './memory-component.scss',
})
export class MemoryComponent implements AfterViewInit {
  question: Question | null = null;
  userAnswer: boolean = false;
  premiseIndex = 0;
  timer: any = null;
  displayConclusion = false;

  rightAnswers = 0;
  totalQuestion = 0;
  displayResult = false;
  isResultCorrect = false;
  isResultIncorrect = false;

  showSettings = false;
  private _premisesCount = 3;
  private _timerInterval = 1;
  set timerInterval(value: number) {
    this._timerInterval = value;
    localStorage.setItem('timerInterval', value.toString());
  }
  get timerInterval(): number {
    return this._timerInterval;
  }
  set premisesCount(value: number) {
    this._premisesCount = value;
    localStorage.setItem('premisesCount', value.toString());
  }
  get premisesCount(): number {
    return this._premisesCount;
  }

  constructor(private syllogimousService: SyllogimousService) {
    const timerInterval = localStorage.getItem('timerInterval');
    if (timerInterval) {
      this._timerInterval = +timerInterval;
    }

    const premisesCount = localStorage.getItem('premisesCount');
    if (premisesCount) {
      this._premisesCount = +premisesCount;
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

  generateQuestion() {
    this.totalQuestion++;
    this.question = this.syllogimousService.createRandomQuestion(
      this.premisesCount,
      true
    );

    console.log(this.question);
  }

  validateAnswer(answer: boolean) {
    this.userAnswer = answer;
    if (this.currentResult) this.rightAnswers++;
    this.isResultCorrect = this.currentResult;
    this.isResultIncorrect = !this.currentResult;
    this.displayResult = true;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.startQuestionTimer();
    }, 0);
  }

  initQuestion() {
    this.isResultCorrect = false;
    this.isResultIncorrect = false;
    this.displayConclusion = false;
    this.displayResult = false;
    this.generateQuestion();
    this.premiseIndex = 0;
  }

  startQuestionTimer() {
    if (this.timer) return;

    this.initQuestion();

    this.timer = setInterval(() => {
      this.nextStep();
    }, this.timerInterval * 1000);
  }

  nextStep() {
    if (++this.premiseIndex >= this.question!.premises.length) {
      this.displayConclusion = true;
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
