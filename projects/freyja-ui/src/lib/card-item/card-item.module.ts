import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item.component';
import { FjButtonModule } from '../button/button.module';
import { FjNativeDropdownModule } from '../native-dropdown/native-dropdown.module';
import { FjTextInputModule } from '../text-input/text-input.module';
import { IconModule } from '../icon/icon.module';
import { FjLightBoxModule } from '../light-box/light-box.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    FjButtonModule,
    FjLightBoxModule,
    FjTextInputModule,
    FjNativeDropdownModule
  ],
  exports: [
    CardItemComponent
  ],
  declarations: [CardItemComponent]
})
export class FjCardItemModule { }
