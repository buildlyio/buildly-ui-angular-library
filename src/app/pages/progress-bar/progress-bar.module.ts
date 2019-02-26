import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ContentWrapModule } from '@freyjaDemo/app/components/content-wrap/content-wrap.module';
import { SubNavModule } from '@freyjaDemo/app/layout/sub-nav/sub-nav.module';
import { FjProgressBarModule } from '@libs/freyja-ui/src/lib/progress-bar/progress-bar.module';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    CommonModule,
    FjProgressBarModule,
    ContentWrapModule,
    SubNavModule,
    HighlightModule.forRoot({ theme: 'arduino-light'})
  ]
})
export class ProgressBarModule { }
