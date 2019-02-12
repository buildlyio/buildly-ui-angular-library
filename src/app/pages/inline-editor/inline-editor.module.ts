import { ContentWrapModule } from './../../components/content-wrap/content-wrap.module';
import { SubNavModule } from './../../layout/sub-nav/sub-nav.module';
import { InlineEditorComponent } from './inline-editor.component';
import { FjInlineEditorModule } from './../../../../projects/freyja-ui/src/lib/inline-editor/inline-editor.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ InlineEditorComponent ],
  imports: [
    CommonModule,
    FjInlineEditorModule,
    SubNavModule,
    ContentWrapModule
  ],
  exports: [
    InlineEditorComponent
  ]
})
export class InlineEditorModule { }
