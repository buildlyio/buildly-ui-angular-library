import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeDropdownComponent } from './native-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    NativeDropdownComponent
  ],
  exports: [
    NativeDropdownComponent
  ]
})
export class FjNativeDropdownModule { }
