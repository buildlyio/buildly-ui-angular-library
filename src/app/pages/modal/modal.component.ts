import { ModalContent } from './../../../../projects/freyja-ui/src/lib/modal/modal-options';
import { TextHelper } from './../../shared/helpers/text.helper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fj-demo-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public navItems = [
    {
      path: '#custom-modal',
      label: 'Custom Modal Content'
    },
    {
      path: '#predefined-modal',
      label: 'Predefined Modal Content'
    }
  ];

  public modalContent: ModalContent = {
    title: 'Modal title',
    text: `
      The content of the modal will be prestyled. All you can really put in here is text.
      Three predefined action buttons can be used: 'primary', 'secondary' and 'danger'.
    `,
    primaryAction: {
      label: 'Primary',
      value: 'primary'
    },
    secondaryAction: {
      label: 'Secondary',
      value: 'secondary'
    },
    dangerAction: {
      label: 'Danger',
      value: 'danger'
    }
  };
  constructor(public textHelper: TextHelper) { }


  public customModal = this.textHelper.dedent`
    <fj-modal #modalCustom>
      <div modal-content>
        <div class="custom-class">
          <h1>Custom Modal Content</h1>
          <div class="custom-class__desc">
            You can customise the content in the modal as much as you want with <pre>modal-content</pre>
          </div>
          <fj-button>
            Custom action
          </fj-button>
        </div>
      </div>
    </fj-modal>
    <fj-button (click)="modal.showModal = true">
      Open Modal
    </fj-button>
  `;

  public definedModalHtml = this.textHelper.dedent`
    <fj-modal #modalDefined [modalContent]="modalContent" (actionClicked)="handleAction($event)">

    </fj-modal>
  `;

  public definedModalJS = this.textHelper.dedent`
    export class ModalComponent {

      public modalContent: ModalContent = {
        title: 'Modal title',
        text: 'The content of the modal will be prestyled.
               All you can really put in here is text. Three predefined
               action buttons can be used: primary, secondary and danger.',

        primaryAction: {
          label: 'Primary',
          value: 'primary'
        },
        secondaryAction: {
          label: 'Secondary',
          value: 'secondary'
        },
        dangerAction: {
          label: 'Danger',
          value: 'danger'
        }
      };

      handleAction(type) {
        switch (type) {
          case 'primary':
            alert('Primary was clicked!');
            break;
          case 'secondary':
            alert('Secondary was clicked!');
            break;
          case 'danger':
            alert('Danger was clicked!');
            break;
        }
      }
    }
  `;

  ngOnInit() {
  }

  handleAction(type) {
    switch (type) {
      case 'primary':
        alert('Primary was clicked!');
        break;
      case 'secondary':
        alert('Secondary was clicked!');
        break;
      case 'danger':
        alert('Danger was clicked!');
        break;
    }
  }
}
