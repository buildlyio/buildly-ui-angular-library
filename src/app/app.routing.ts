import { Routes } from '@angular/router';
import {ButtonComponent} from './pages/button/button.component';
import {AccordionComponent} from './pages/accordion/accordion.component';
import { RadioButtonComponent } from './pages/radio-button/radio-button.component';
import { CheckBoxComponent } from './pages/check-box/check-box.component';

export const appRoutes: Routes = [
  { path: '', component: ButtonComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'radio-button', component: RadioButtonComponent },
  { path: 'check-box', component: CheckBoxComponent },
];
