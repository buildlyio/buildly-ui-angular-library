import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavSetComponent} from 'src/app/components/side-nav/side-nav-set.component';
import {SidenavComponent} from './side-nav/side-nav.component';

const components = [SidenavComponent, SidenavSetComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class SidenavModule { }
