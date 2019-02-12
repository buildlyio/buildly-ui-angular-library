import { FjTextInputModule } from './../text-input/text-input.module';
import { InlineEditorComponent } from './inline-editor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ InlineEditorComponent ],
  imports: [
    CommonModule,
    FjTextInputModule
  ],
  exports: [
    InlineEditorComponent
  ]
})
export class FjInlineEditorModule { }
