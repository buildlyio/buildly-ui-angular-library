import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { IconModule } from '../icon/icon.module';

const modules = [
  CardComponent
];
@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: modules,
  exports: modules
})
export class FjCardModule { }
