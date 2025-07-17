import { Injectable } from '@angular/core';
import { Knowledge } from '../models/knowledge.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class KnowledgeService {
  private static KNOWLEDGE_FILES = [
    'Angular.json',
    'DDD.json',
    'Springboot.json',
  ];

  constructor(private http: HttpClient) {}

  getKnowledge(): Knowledge[] {
    const allKnowledge: Knowledge[] = [];
    KnowledgeService.KNOWLEDGE_FILES.forEach((file) =>
      this.http.get(`assets/knowledge/${file}`).subscribe((data) => {
        Object.entries(data).forEach(([entryKey, entry]) => {
          console.log(entryKey, entry);
          for (const information in entry) {
            allKnowledge.push(
              Knowledge.of(file.replace('.json', ''), entryKey, information)
            );
          }
        });
      })
    );
    return allKnowledge;
  }
}
