import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { DemoCustomDropdownComponent } from '@freyjaDemo/app/pages/custom-dropdown/custom-dropdown.component';
import { ContentWrapModule } from '@freyjaDemo/app/components/content-wrap/content-wrap.module';
import { FjCustomDropdownModule } from '@libs/freyja-ui/src/lib/custom-dropdown/custom-dropdown.module';

@NgModule({
  declarations: [DemoCustomDropdownComponent],
  imports: [
    CommonModule,
    ContentWrapModule,
    HighlightModule,
    FjCustomDropdownModule
  ]
})
export class CustomDropdownModule { }
