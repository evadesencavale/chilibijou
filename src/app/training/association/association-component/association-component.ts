import { Component } from '@angular/core';
import { Question } from '../../../syllogimous/models/question.models';
import { SyllogimousService } from '../../../syllogimous/services/syllogimous.service';
import { AssociationSettingsService } from '../services/association-settings.service';
import { AssociationSettingsComponent } from '../components/association-settings-component/association-settings-component';
import { PremiseComponent } from '../../shared/premise-component/premise-component';
import { ConclusionComponent } from '../../shared/conclusion-component/conclusion-component';

@Component({
  selector: 'app-association-component',
  standalone: true,
  imports: [
    AssociationSettingsComponent,
    PremiseComponent,
    ConclusionComponent,
  ],
  templateUrl: './association-component.html',
  styleUrl: './association-component.scss',
})
export class AssociationComponent {
  questions: Question[] = [];
  randomizedPremises: string[] = [];
  totalAnswers = 0;
  rightAnswers = 0;
  readyForNextQuestions = false;
  questionCount = 0;

  constructor(
    private syllogimousService: SyllogimousService,
    private associationSettingsService: AssociationSettingsService
  ) {}

  get isReadyForNextQuestion() {
    return this.questions.length === 0 || this.readyForNextQuestions;
  }

  private generateQuestions() {
    const premiseCount =
      this.associationSettingsService.getSettings().premisesCount;
    this.questionCount =
      this.associationSettingsService.getSettings().questionCount;

    this.questions = [];
    while (this.questions.length < this.questionCount) {
      const question = this.syllogimousService.createRandomQuestion(
        premiseCount,
        true
      );
      this.questions.push(question);
    }

    this.randomizedPremises = [];
    const allPremises = this.questions.flatMap((q) =>
      q.premises.flatMap((p) => p)
    );

    while (allPremises.length > 0) {
      this.randomizedPremises.push(
        allPremises.splice(Math.floor(Math.random() * allPremises.length), 1)[0]
      );
    }
  }

  onQuestionAnswered(result: boolean, index: number) {
    if (result) this.rightAnswers++;
    this.totalAnswers++;
    this.readyForNextQuestions = this.totalAnswers % this.questionCount === 0;
    this.questions.splice(index, 1);
  }

  nextQuestions() {
    this.generateQuestions();
    this.readyForNextQuestions = false;
  }
}
