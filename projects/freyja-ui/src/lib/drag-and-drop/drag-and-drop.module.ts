import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';

import { FjDragAndDropComponent } from './drag-and-drop.component';
import { IconModule } from '../icon/icon.module';
import {FjButtonModule} from '../button/button.module';

const DEFAULT_DROPZONE_CONFIGURATIONS: DropzoneConfigInterface = {
  url: '/',
  maxFiles: 1,
  dictDefaultMessage: '',
  createImageThumbnails: true,
  acceptedFiles: 'image/*, .pdf, .doc, .docx'
};

@NgModule({
  declarations: [FjDragAndDropComponent],
  imports: [
    CommonModule,
    DropzoneModule,
    FjButtonModule,
    IconModule
  ],
  exports: [FjDragAndDropComponent, DropzoneModule],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIGURATIONS
    }
  ]
})
export class FjDragAndDropModule {}
