import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CheckboxGridModule} from '@libs/freyja/src/lib/checkbox-grid/checkbox-grid.module';

@NgModule({
  declarations: [
    AppComponent
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
