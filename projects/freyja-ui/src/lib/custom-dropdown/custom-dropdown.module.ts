import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomDropdownComponent } from './custom-dropdown.component';


@NgModule({
  declarations: [CustomDropdownComponent],
  exports: [
    CustomDropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FjCustomDropdownModule { }
