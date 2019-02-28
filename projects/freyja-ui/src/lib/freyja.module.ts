import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FreyjaComponent } from './freyja.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [FreyjaComponent],
  imports: [
    HttpClientModule
  ],
  exports: [FreyjaComponent]
})
export class FreyjaModule { }
