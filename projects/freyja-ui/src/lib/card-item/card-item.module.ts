import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item.component';
import { FjButtonModule } from '../button/button.module';
import { FjNativeDropdownModule } from '../native-dropdown/native-dropdown.module';
import { FjTextInputModule } from '../text-input/text-input.module';
import { ClickOutsideModule } from "ng4-click-outside";

@NgModule({
  imports: [
    CommonModule,
    ClickOutsideModule,
    FjButtonModule,
    FjTextInputModule,
    FjNativeDropdownModule
  ],
  exports: [
    CardItemComponent
  ],
  declarations: [CardItemComponent]
})
export class FjCardItemModule { }
