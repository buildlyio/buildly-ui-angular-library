import { FjTextInputModule } from '../text-input/text-input.module';
import { InlineTextEditorComponent } from './inline-text-editor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ InlineTextEditorComponent ],
  imports: [
    CommonModule,
    FjTextInputModule
  ],
  exports: [
    InlineTextEditorComponent
  ]
})
export class FjInlineTextEditorModule { }
