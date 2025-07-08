import { Component } from '@angular/core';
import { Question } from '../../../syllogimous/models/question.models';
import { SyllogimousService } from '../../../syllogimous/services/syllogimous.service';
import { FormsModule } from '@angular/forms';
import { MemorySettingsComponent } from '../memory-settings-component/memory-settings-component';
import { MemorySettingsService } from '../../services/memory-settings.service';
import { MemoryQuestionComponent } from '../memory-question-component/memory-question-component';

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

  get isReadyForNextQuestion() {
    return !this.question || this.readyForNextQuestion;
  }

  generateQuestion() {
    const question = this.syllogimousService.createRandomQuestion(
      this.memorySettingsService.getSettings().premisesCount,
      true
    );

    this.questions.push(question);
    return question;
  }

  onQuestionAnswered(validAnswer: boolean) {
    if (validAnswer) this.rightAnswers++;
    this.readyForNextQuestion = true;
  }

  nextQuestion() {
    this.readyForNextQuestion = false;
    this.question = this.generateQuestion();
  }
}
