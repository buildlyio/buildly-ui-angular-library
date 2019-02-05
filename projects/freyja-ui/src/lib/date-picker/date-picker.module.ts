import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatePickerComponent} from './date-picker.component';
import {NgxMyDatePickerConfig, NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {IconModule} from '../icon/icon.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DatePickerService} from './date-picker.service';

@NgModule({
  imports: [
    CommonModule,
    NgxMyDatePickerModule,
    ReactiveFormsModule,
    IconModule
  ],
  providers: [DatePickerService, NgxMyDatePickerConfig],
  exports: [DatePickerComponent],
  declarations: [DatePickerComponent]
})
export class FjDatePickerModule { }
