import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {
  DropzoneComponent,
  DropzoneDirective,
  DropzoneConfigInterface
} from 'ngx-dropzone-wrapper';

@Component({
  selector: 'fj-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FjDragAndDropComponent implements OnInit, OnChanges {
  @ViewChild(DropzoneComponent) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective) directiveRef?: DropzoneDirective;

  @Output() uploadedDoc: EventEmitter<any> = new EventEmitter();
  @Output() fileToUpload: EventEmitter<any> = new EventEmitter();
  @Input() removeFile: any;
  @Input() noFileSelected;
  public disabled = false;
  public showPlaceholder = true;
  public uploadedFile: any;

  public dropZoneconfig: DropzoneConfigInterface = {
    clickable: '.trigger-upload',
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    uploadMultiple: false
  };

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.getParentChanges(changes);
  }

  /**
   * @description called on upload error
   * @param args
   */
  public onUploadError(args: any): void {
    this.disabled = true;
    return;
  }

  /**
   * @description on drag-start event
   * @param event
   */
  public onFileAdded(file) {
    this.uploadedFile = file;
    const reader = new FileReader();
    reader.onload = (event) => {
      // event.target.result contains base64 encoded file
      this.fileToUpload.emit(reader.result);
    };
    try {
      reader.readAsDataURL(file);
    } catch (error) {}
    this.uploadedDoc.emit(file);
    this.showPlaceholder = false;
  }

  /**
   * @description - called on file removed from drag-drop area
   * @description - emits null to the parent
   * @param event
   */
  public onFileRemoved(event) {
    this.fileToUpload.emit(null);
    this.showPlaceholder = true;
    this.disabled = false;
  }

  /**
   * @description - resets drag-drop area on form submit and modal close events
   * @description - sets showPlaceholder value to (true/false) to position the drop container
   * @param {object} changes - object of type SimpleChanges
   */
  public getParentChanges(changes) {
    if (changes.removeFile && changes.removeFile.currentValue) {
      // clear dropzone
      if (this.directiveRef) {
        this.directiveRef.reset();
      }
      this.showPlaceholder = true;
    }
    // Diplay error message if a form is submitted without selecting a file
    if (
      changes.noFileSelected &&
      changes.noFileSelected.currentValue === true
    ) {
      this.noFileSelected = true;
    } else {
      this.noFileSelected = false;
    }
  }
}
