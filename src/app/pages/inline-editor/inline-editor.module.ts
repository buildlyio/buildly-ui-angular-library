import { FjInlineTextEditorModule } from './../../../../projects/freyja-ui/src/lib/inline-text-editor/inline-text-editor.module';
import { ContentWrapModule } from './../../components/content-wrap/content-wrap.module';
import { SubNavModule } from './../../layout/sub-nav/sub-nav.module';
import { InlineEditorComponent } from './inline-editor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ InlineEditorComponent ],
  imports: [
    CommonModule,
    FjInlineTextEditorModule,
    SubNavModule,
    ContentWrapModule
  ],
  exports: [
    InlineEditorComponent
  ]
})
export class InlineEditorModule { }
