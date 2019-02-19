import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubNavModule } from '../../layout/sub-nav/sub-nav.module';
import { ContentWrapModule } from '../../components/content-wrap/content-wrap.module';
import { TextHelper } from '../../shared/helpers/text.helper';
import { ContentSwitcherComponent } from './content-switcher.component';
import { HighlightModule } from 'ngx-highlightjs';
import {FjContentSwitcherModule} from '@libs/freyja-ui/src/lib/content-switcher/content-switcher.module';

@NgModule({
  declarations: [ContentSwitcherComponent],
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjContentSwitcherModule,
    HighlightModule.forRoot({ theme: 'arduino-light' })
  ],
  providers: [TextHelper],
  exports: [
    ContentSwitcherComponent
  ]
})
export class ContentSwitcherModule { }
