import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { ComponenteComponent } from '../components/componente/componente.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Starter Page' },
      ],
    },
  },
  {
    path: 'componente',
    component: ComponenteComponent,
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/componente' },
        { title: 'Starter Page' },
      ],
    },
  },
];
