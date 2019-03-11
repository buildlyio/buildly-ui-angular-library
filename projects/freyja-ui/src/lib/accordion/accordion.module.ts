import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { FjSvgIconModule } from '../svg-icon/svg-icon.module';

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    FjSvgIconModule
  ],
  exports: [
    AccordionComponent
  ]
})
export class FjAccordionModule { }
