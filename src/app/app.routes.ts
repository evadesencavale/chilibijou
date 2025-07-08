import { Routes } from '@angular/router';
import { ErChampData } from './er-champ-data/er-champ-data';
import { MemoryComponent } from './training/memory-component/memory-component';

export const routes: Routes = [
  {
    path: '**',
    component: MemoryComponent,
  },
  {
    path: 'erchampdata',
    component: ErChampData,
  },
];
