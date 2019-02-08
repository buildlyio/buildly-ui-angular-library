import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighlightModule} from 'ngx-highlightjs';
import {TextHelper} from '../../shared/helpers/text.helper';
import { FjCardItemModule } from '@libs/freyja-ui/src/lib/card-item/card-item.module';
import { CardItemComponent } from './card-item.component';
import { ContentWrapModule } from '../../components/content-wrap/content-wrap.module';

@NgModule({
  imports: [
    CommonModule,
    FjCardItemModule,
    ContentWrapModule,
    HighlightModule.forRoot({ theme: 'arduino-light'})
  ],
  providers: [TextHelper],
  declarations: [CardItemComponent, CardItemComponent],
  exports: [CardItemComponent]
})
export class CardItemModule { }
