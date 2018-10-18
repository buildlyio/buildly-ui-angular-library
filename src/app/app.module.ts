import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CheckboxGridModule} from '@libs/freyja/src/lib/checkbox-grid/checkbox-grid.module';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { HeaderComponent } from './layout/header/header.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';
import {ButtonModule} from './pages/button/button.module';
import {SidenavModule} from './components/side-nav/side-nav.module';

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
    SidenavModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CheckboxGridModule]
})
export class AppModule { }
