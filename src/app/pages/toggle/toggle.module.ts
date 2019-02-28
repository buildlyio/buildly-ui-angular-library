import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from '@freyjaDemo/app/pages/toggle/toggle.component';
import { FjToggleModule } from '@libs/freyja-ui/src/lib/toggle/toggle.module';
import { HighlightModule } from 'ngx-highlightjs';
import { ContentWrapModule } from '@freyjaDemo/app/components/content-wrap/content-wrap.module';
import { SubNavModule } from '@freyjaDemo/app/layout/sub-nav/sub-nav.module';

@NgModule({
  declarations: [ToggleComponent],
  imports: [
    CommonModule,
    FjToggleModule,
    ContentWrapModule,
    SubNavModule,
    HighlightModule.forRoot({ theme: 'arduino-light'})
  ],
  exports: [
    ToggleComponent
  ]
})
export class ToggleModule { }
