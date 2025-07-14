import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../../syllogimous/models/question.models';

@Component({
  selector: 'app-conclusion-component',
  standalone: true,
  imports: [],
  templateUrl: './conclusion-component.html',
  styleUrl: './conclusion-component.scss',
})
export class ConclusionComponent {
  @Input({ required: true }) question!: Question;
  @Input() displayInstructions = false;
  @Output() questionAnswered = new EventEmitter<boolean>();
  userAnswer: boolean | undefined = false;

  get currentResult(): boolean {
    return this.userAnswer === this.question?.isValid;
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

  validateConclusion(answer?: boolean) {
    this.userAnswer = answer;
    this.questionAnswered.emit(this.currentResult);
  }
}
