import { Component, OnInit } from '@angular/core';
import {TextHelper} from '../../../shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public codeType = this.textHelper.dedent`
    <fj-button>Primary</fj-button>
    <fj-button buttonStyle="light">Light</fj-button>
    <fj-button [ghost]="true">Disabled</fj-button>
    <fj-button buttonStyle="danger">Destructive</fj-button>
  `;

  public codeSize = this.textHelper.dedent`
    <fj-button buttonSize="lrg">Big</fj-button>
    <fj-button buttonSize="med">Medium</fj-button>
    <fj-button buttonSize="sm">Small</fj-button>
    <fj-button buttonSize="micro">Micro</fj-button>
  `;

  public codeShape = this.textHelper.dedent`
    <fj-button>Radius</fj-button>
    <fj-button buttonShape="square">Square</fj-button>
    <fj-button buttonShape="rounded">Round</fj-button>
  `;

  public codeIcon = this.textHelper.dedent`
    <fj-button buttonIcon="plus">Button</fj-button>
  `;

  public codeStyle = this.textHelper.dedent`
    <fj-button [ghost]="true" buttonIcon="plus" iconFill="#1b51a0">Ghost</fj-button>
  `;
  constructor(public textHelper: TextHelper) { }

  ngOnInit() {
  }

}
