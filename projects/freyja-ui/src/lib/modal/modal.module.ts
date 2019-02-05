import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {FjButtonModule} from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FjButtonModule
  ],
  exports: [ModalComponent],
  declarations: [ModalComponent]
})
export class FjModalModule { }
