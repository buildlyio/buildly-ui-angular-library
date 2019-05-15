import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToggleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ToggleComponent
  ]
})
export class FjToggleModule { }
