import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubNavComponent} from './sub-nav.component';
import {SidenavModule} from '../../components/side-nav/side-nav.module';

@NgModule({
  imports: [
    CommonModule,
    SidenavModule
  ],
  declarations: [
    SubNavComponent
  ],
  exports: [SubNavComponent]
})
export class SubNavModule { }
