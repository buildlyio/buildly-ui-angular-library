import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { CardIconTitleComponent } from './components/card-icon-title/card-icon-title.component';
import { IconModule } from '../icon/icon.module';

const modules = [
  CardComponent,
  CardTitleComponent,
  CardIconTitleComponent,
  CardContentComponent
];
@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: modules,
  exports: modules
})
export class CardModule { }
