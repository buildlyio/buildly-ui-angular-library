import { NgModule } from '@angular/core';
import { ProgressBarComponent } from '@mg/ui-components/progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProgressBarComponent,
  ],
  imports: [
   CommonModule
  ],
  exports: [
    ProgressBarComponent
  ]
})
export class ProgressBarModule {
}

