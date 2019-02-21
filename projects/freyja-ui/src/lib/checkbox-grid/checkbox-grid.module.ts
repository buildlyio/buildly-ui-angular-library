import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGridComponent } from '../checkbox-grid/checkbox-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FjCheckboxModule } from '@libs/freyja-ui/src/lib/checkbox/checkbox.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FjCheckboxModule
  ],
  declarations: [
    CheckboxGridComponent
  ],
  exports: [CheckboxGridComponent]
})
export class FjCheckboxGridModule { }
