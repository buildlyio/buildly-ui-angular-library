import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ContentWrapModule } from '@freyjaDemo/app/components/content-wrap/content-wrap.module';
import { SubNavModule } from '@freyjaDemo/app/layout/sub-nav/sub-nav.module';
import { FjSpinnerModule } from '@libs/freyja-ui/src/lib/spinner/spinner.module';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    FjSpinnerModule,
    ContentWrapModule,
    SubNavModule,
    HighlightModule.forRoot({ theme: 'arduino-light'})
  ]
})
export class SpinnerModule { }
