import { Routes } from '@angular/router';
import { ComponenteComponent } from './componente.component';

export const ComponenteRoutes: Routes = [
  {
    path: '',
    component: ComponenteComponent,
    data: {
      title: 'Componente',
      urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Componente' }],
    },
  },
];