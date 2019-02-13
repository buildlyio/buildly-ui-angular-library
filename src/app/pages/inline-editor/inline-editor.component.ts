import { TextHelper } from './../../shared/helpers/text.helper';
import { Component } from '@angular/core';

@Component({
  selector: 'fj-demo-inline-editor',
  templateUrl: './inline-editor.component.html',
  styleUrls: ['./inline-editor.component.scss']
})
export class InlineEditorComponent {

  inputValue = 'Double Click to Edit';

  inlineTextEditorExampleHtml = this.textHelper.dedent`
    <fj-inline-text-editor
      [value]="inputValue"
      name="myInput"
      (elementEdited)="onElementEdit($event)">
    </fj-inline-text-editor>
  `;

  inlineTextEditorExampleJS = this.textHelper.dedent`
    export class InlineEditorExample {

      inputValue = 'Double Click to Edit';

      constructor() { }

      onElementEdit(event) {
        this.inputValue = event.value;
      }

    }
  `;
  constructor(private textHelper: TextHelper) { }

  onElementEdit(event) {
    this.inputValue = event.value;
  }

}
