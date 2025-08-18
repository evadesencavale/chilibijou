import { Component } from '@angular/core';
import { KnowledgeService } from '../../memory/services/knowledge.service';
import { Knowledge } from '../../memory/models/knowledge.models';

@Component({
  selector: 'app-knowledge-view-page-component',
  standalone: true,
  imports: [],
  templateUrl: './knowledge-view-page-component.html',
  styleUrl: './knowledge-view-page-component.scss',
})
export class KnowledgeViewPageComponent {
  allKnowledge: Knowledge[];

  constructor(private knowledgeService: KnowledgeService) {
    this.allKnowledge = this.knowledgeService.getKnowledge();
  }
}
