import { Routes } from '@angular/router';
import { ErChampData } from './er-champ-data/er-champ-data';
import { MemoryComponent } from './training/memory/components/memory-component/memory-component';
import { AssociationComponent } from './training/association/association-component/association-component';

export const routes: Routes = [
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
    path: 'erchampdata',
    title: 'ER Champ 2025 Data',
    component: ErChampData,
  },
  {
    path: '**',
    redirectTo: 'memory',
  },
];
