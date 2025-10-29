import { Routes } from '@angular/router';
import { ErChampData } from './er-champ-data/er-champ-data';
import { MemoryComponent } from './training/memory/components/memory-component/memory-component';
import { KnowledgeMemoryComponent } from './knowledge/memory/components/knowledge-memory-component/knowledge-memory-component';
import { AssociationComponent } from './training/association/components/association-component/association-component';
import { KnowledgeViewPageComponent } from './knowledge/components/knowledge-view-page-component/knowledge-view-page-component';
import { CypherLearningComponent } from './cypher-learning/components/cypher-learning-component/cypher-learning-component';

export const routes: Routes = [
  {
    path: 'cypher',
    title: 'Cypher Learning',
    component: CypherLearningComponent,    
  },
  {
    path: 'memory',
    title: 'Memory Training',
    component: MemoryComponent,
  },
  {
    path: 'association',
    title: 'Association Training',
    component: AssociationComponent,
  },
  {
    path: 'knowledge',
    title: 'Knowledge',
    component: KnowledgeViewPageComponent,
  },
  {
    path: 'knowledge-memory',
    title: 'Knowledge Memory',
    component: KnowledgeMemoryComponent,
  },
  {
    path: 'erchampdata',
    title: 'ER Champ 2025 Data',
    component: ErChampData,
  },
  {
    path: '**',
    redirectTo: 'memory',
  },
];
