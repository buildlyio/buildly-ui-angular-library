import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CheckboxGridModule} from '@libs/freyja/src/lib/checkbox-grid/checkbox-grid.module';
import { SubNavComponent } from './layout/sub-nav/sub-nav.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SubNavComponent,
    MainNavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CheckboxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CheckboxGridModule]
})
export class AppModule { }
