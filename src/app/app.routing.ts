import { Routes } from '@angular/router';
import {ButtonComponent} from './pages/button/button.component';
import {AccordionComponent} from './pages/accordion/accordion.component';

export const appRoutes: Routes = [
  { path: '', component: ButtonComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'accordion', component: AccordionComponent },
];
