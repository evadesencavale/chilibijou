import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SyllogimousService } from './syllogimous/services/syllogimous.service';
import { Question } from './syllogimous/models/question.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  question: Question;

  constructor(private syllogimousService: SyllogimousService) {
    this.question = syllogimousService.createRandomQuestion(3, true);
    console.log(this.question);
  }
}
