import { Component, OnInit } from '@angular/core';
import { TextHelper } from '@freyjaDemo/app/shared/helpers/text.helper';

@Component({
  selector: 'fj-demo-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public codeType = this.textHelper.dedent`
    <fj-button>Primary</fj-button>
    <fj-button color="light">Light</fj-button>
    <fj-button [disabled]="true">Disabled</fj-button>
    <fj-button color="light--danger">light Destructive</fj-button>
    <fj-button color="danger">Destructive</fj-button>
  `;

  public codeSize = this.textHelper.dedent`
    <fj-button size="large">Big</fj-button>
    <fj-button size="medium">Medium</fj-button>
    <fj-button size="small">Small</fj-button>
    <fj-button size="micro">Micro</fj-button>
  `;

  public codeShape = this.textHelper.dedent`
    <fj-button>Radius</fj-button>
    <fj-button shape="square">Square</fj-button>
    <fj-button shape="rounded">Round</fj-button>
  `;

  public codeIcon = this.textHelper.dedent`
    <fj-button icon="plus">Button</fj-button>
  `;

  public codeStyle = this.textHelper.dedent`
    <fj-button [ghost]="true" icon="plus_circle">Ghost</fj-button>
    <fj-button [ghost]="true" icon="plus_circle" disabled>Ghost</fj-button>
  `;
  public codeWidth = this.textHelper.dedent`
    <div style="width: 300px">
      <fj-button [fullWidth]="true">Full width</fj-button>
    </div>
  `;
  constructor(public textHelper: TextHelper) { }

  ngOnInit() {
  }
}
