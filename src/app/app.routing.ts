import { InlineEditorComponent } from './pages/inline-editor/inline-editor.component';
import { ModalComponent } from './pages/modal/modal.component';
import { Routes } from '@angular/router';
import {ButtonComponent} from './pages/button/button.component';
import {AccordionComponent} from './pages/accordion/accordion.component';
import {ContentSwitcherComponent} from './pages/content-switcher/content-switcher.component';
import { RadioButtonComponent } from './pages/radio-button/radio-button.component';
import { CheckBoxComponent } from './pages/check-box/check-box.component';
import { DemoNumberInputComponent } from './pages/number-input/number-input.component';
import { DemoTextInputComponent } from './pages/text-input/text-input.component';
import { DemoSvgIconComponent } from './pages/svg-icon/svg-icon.component';
import { CardItemComponent } from './pages/card-item/card-item.component';
import { CardComponent } from './pages/card/card.component';
import { TableComponent } from './pages/table/table.component';
import { ProgressBarComponent } from './pages/progress-bar/progress-bar.component';
import { SpinnerComponent } from './pages/spinner/spinner.component';
import { ToggleComponent } from '@freyjaDemo/app/pages/toggle/toggle.component';
import { DemoNativeDropdownComponent } from './pages/native-dropdown/native-dropdown.component';
import { DemoCustomDropdownComponent } from '@freyjaDemo/app/pages/custom-dropdown/custom-dropdown.component';

export const appRoutes: Routes = [
  { path: '', component: ButtonComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'radio-button', component: RadioButtonComponent },
  { path: 'check-box', component: CheckBoxComponent },
  { path: 'number-input', component: DemoNumberInputComponent },
  { path: 'text-input', component: DemoTextInputComponent },
  { path: 'svg-icon', component: DemoSvgIconComponent },
  { path: 'card-item', component: CardItemComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'inline-editing', component: InlineEditorComponent },
  { path: 'content-switcher', component: ContentSwitcherComponent},
  { path: 'card', component: CardComponent},
  { path: 'table', component: TableComponent},
  { path: 'spinner', component: SpinnerComponent},
  { path: 'progress-bar', component: ProgressBarComponent},
  { path: 'modal', component: ModalComponent },
  { path: 'toggle', component: ToggleComponent },
  { path: 'native-dropdown', component: DemoNativeDropdownComponent },
  { path: 'custom-dropdown', component: DemoCustomDropdownComponent }
];
