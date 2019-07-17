import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMenuComponent } from './menu.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ContentWrapModule } from '@freyjaDemo/app/components/content-wrap/content-wrap.module';
import { FjMenuModule, FjButtonModule } from '@libs/freyja-ui/src/public_api';

@NgModule({
  declarations: [DemoMenuComponent],
  imports: [
    CommonModule,
    FjMenuModule,
    FjButtonModule,
    HighlightModule.forRoot({theme: 'arduino-light'}),
    ContentWrapModule
  ]
})
export class MenuModule { }
