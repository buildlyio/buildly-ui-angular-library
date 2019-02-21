import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ContentWrapModule } from '@freyjaDemo/app/components/content-wrap/content-wrap.module';
import { SubNavModule } from '@freyjaDemo/app/layout/sub-nav/sub-nav.module';
import { FjCardModule } from '@libs/freyja-ui/src/lib/card/card.module';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    FjCardModule,
    ContentWrapModule,
    SubNavModule,
    HighlightModule.forRoot({ theme: 'arduino-light'})
  ]
})
export class CardModule { }
