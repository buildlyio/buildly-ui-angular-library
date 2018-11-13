import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentWrapComponent} from './content-wrap.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentWrapComponent],
  exports: [ContentWrapComponent]
})
export class ContentWrapModule { }
