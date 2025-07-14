import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MemorySettingsComponent } from '../memory-settings-component/memory-settings-component';
import { MemorySettingsService } from '../../services/memory-settings.service';
import { MemoryQuestionComponent } from '../memory-question-component/memory-question-component';
import { Question } from '../../../../syllogimous/models/question.models';
import { SyllogimousService } from '../../../../syllogimous/services/syllogimous.service';

@Component({
  selector: 'app-memory-component',
  standalone: true,
  imports: [FormsModule, MemorySettingsComponent, MemoryQuestionComponent],
  templateUrl: './memory-component.html',
  styleUrl: './memory-component.scss',
})
export class MemoryComponent {
  question!: Question;
  questions: Question[] = [];
  rightAnswers = 0;
  readyForNextQuestion = false;

  constructor(
    private syllogimousService: SyllogimousService,
    private memorySettingsService: MemorySettingsService
  ) {}

  get totalAnswers(): number {
    if (this.questions.length === 0) return 0;
    return (
      this.questions.length +
      this.questions.map((q) => q.premises.length).reduce((sum, p) => sum + p)
    );
  }

  get isReadyForNextQuestion() {
    return !this.question || this.readyForNextQuestion;
  }

  generateQuestion() {
    const premiseCount = this.memorySettingsService.getSettings().premisesCount;
    const question = this.syllogimousService.createRandomQuestion(
      premiseCount,
      true
    );

    this.questions.push(question);

    return question;
  }

  onQuestionAnswered(validAnswers: number) {
    this.rightAnswers += validAnswers;
    this.readyForNextQuestion = true;
  }

  nextQuestion() {
    this.readyForNextQuestion = false;
    this.question = this.generateQuestion();
  }
}
