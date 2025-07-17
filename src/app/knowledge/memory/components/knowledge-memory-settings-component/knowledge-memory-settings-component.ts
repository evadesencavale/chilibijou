import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnowledgeMemorySettingsService } from '../../services/knowledge-memory-settings.service';
import { KnowledgeMemorySettings } from '../../models/knowledge-memory-settings.models';

@Component({
  selector: 'app-memory-settings-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './knowledge-memory-settings-component.html',
  styleUrl: './knowledge-memory-settings-component.scss',
})
export class KnowledgeMemorySettingsComponent {
  showSettings = false;
  knowledgeMemorySettings: KnowledgeMemorySettings;

  constructor(
    private knowledgeMemorySettingsService: KnowledgeMemorySettingsService
  ) {
    this.knowledgeMemorySettings = knowledgeMemorySettingsService.getSettings();
  }

  setSentencesCount(value: number) {
    this.knowledgeMemorySettings.sentencesCount = value;
    this.knowledgeMemorySettingsService.saveSettings(
      this.knowledgeMemorySettings
    );
  }

  setSentenceDisplayTime(value: number) {
    this.knowledgeMemorySettings.sentenceDisplayTime = value;
    this.knowledgeMemorySettingsService.saveSettings(
      this.knowledgeMemorySettings
    );
  }
}
