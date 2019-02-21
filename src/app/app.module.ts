import { ModalModule } from './pages/modal/modal.module';
import { HighlightModule } from 'ngx-highlightjs';
import { FjButtonModule } from './../../projects/freyja-ui/src/lib/button/button.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckboxGridModule } from 'projects/freyja-ui/src/lib/checkbox-grid/checkbox-grid.module';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { ButtonModule } from './pages/button/button.module';
import { RadioButtonModule } from './pages/radio-button/radio-button.module';
import { CheckBoxModule } from './pages/check-box/check-box.module';
import { NumberInputModule } from './pages/number-input/number-input.module';
import { TextInputModule } from './pages/text-input/text-input.module';
import { SidenavModule } from './components/side-nav/side-nav.module';
import { AccordionModule } from './pages/accordion/accordion.module';
import { SvgIconModule } from './pages/svg-icon/svg-icon.module';
import { ContentWrapModule } from './components/content-wrap/content-wrap.module';
import { CardItemModule } from './pages/card-item/card-item.module';
import {ContentSwitcherModule} from './pages/content-switcher/content-switcher.module';
import { CardModule } from '@freyjaDemo/app/pages/card/card.module';
import { SpinnerModule } from '@freyjaDemo/app/pages/spinner/spinner.module';
import { ProgressBarModule } from '@freyjaDemo/app/pages/progress-bar/progress-bar.module';
import { TableModule } from '@freyjaDemo/app/pages/table/table.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CheckboxGridModule,
    ButtonModule,
    RadioButtonModule,
    CheckBoxModule,
    NumberInputModule,
    TextInputModule,
    SvgIconModule,
    AccordionModule,
    ContentSwitcherModule,
    SidenavModule,
    ContentWrapModule,
    CardItemModule,
    ModalModule,
    CardModule,
    SpinnerModule,
    ProgressBarModule,
    TableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CheckboxGridModule]
})
export class AppModule { }
