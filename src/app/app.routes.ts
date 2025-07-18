import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './feature/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: Dashboard }
        ]
      }
];
