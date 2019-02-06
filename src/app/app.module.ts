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
import { ContentWrapComponent } from './components/content-wrap/content-wrap.component';
import { SvgIconModule } from './pages/svg-icon/svg-icon.module';
import { ContentWrapModule } from './components/content-wrap/content-wrap.module';

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
    SidenavModule,
    ContentWrapModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CheckboxGridModule]
})
export class AppModule { }
