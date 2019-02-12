import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fj-demo-inline-editor',
  templateUrl: './inline-editor.component.html',
  styleUrls: ['./inline-editor.component.scss']
})
export class InlineEditorComponent implements OnInit {

  inputValue = 'Initial Value';
  constructor() { }

  ngOnInit() {
  }

  onElementEdit(event) {
    this.inputValue = event.value;
  }

}
