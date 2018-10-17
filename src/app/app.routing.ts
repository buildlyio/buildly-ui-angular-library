import { Routes } from '@angular/router';
import {ButtonComponent} from './pages/button/button.component';

export const appRoutes: Routes = [
  { path: '', component: ButtonComponent },
  { path: 'button', component: ButtonComponent },
];
