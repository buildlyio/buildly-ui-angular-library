import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FjTextInputModule} from '../text-input/text-input.module';
import {FjButtonModule} from '../../../../../dist/freyja-ui';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FjTextInputModule,
    FjButtonModule
  ],
  exports: [
    FormComponent
  ]
})
export class FjFormModule { }
