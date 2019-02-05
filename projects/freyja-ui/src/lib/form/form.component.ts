import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'fj-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  /**
   * reactive form group
   */
  @Input() reactiveFormGroup;
  /**
   * text of the submit button
   */
  @Input() submitButtonText: string;

  /**
   * callback for click event
   */
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}

  /**
   * function that will emit the submit event emitter
   */
  submitForm() {
    this.submit.emit();
  }

}
