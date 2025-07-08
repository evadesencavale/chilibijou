import { Routes } from '@angular/router';
import { ErChampData } from './er-champ-data/er-champ-data';
import { MemoryComponent } from './training/components/memory-component/memory-component';

export const routes: Routes = [
  {
    path: 'memory',
    component: MemoryComponent,
  },
  {
    path: 'erchampdata',
    component: ErChampData,
  },
  {
    path: '**',
    redirectTo: 'memory',
  },
];
