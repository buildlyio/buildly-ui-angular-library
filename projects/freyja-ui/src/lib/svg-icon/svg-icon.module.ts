import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './svg-icon.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SvgIconComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [SvgIconComponent]
})
export class FjSvgIconModule { }
