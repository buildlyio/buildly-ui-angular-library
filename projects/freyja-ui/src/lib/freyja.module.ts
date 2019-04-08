import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FreyjaComponent } from './freyja.component';

@NgModule({
  declarations: [FreyjaComponent],
  imports: [
    HttpClientModule
  ],
  exports: [FreyjaComponent]
})
export class FreyjaModule { }
