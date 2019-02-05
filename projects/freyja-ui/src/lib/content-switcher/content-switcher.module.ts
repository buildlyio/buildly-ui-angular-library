import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSwitcherComponent } from './content-switcher.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ContentSwitcherComponent],
  declarations: [ContentSwitcherComponent]
})
export class FjContentSwitcherModule { }
