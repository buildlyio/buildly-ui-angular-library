import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeDropdownComponent } from './native-dropdown.component';

describe('NativeDropdownComponent', () => {
  let component: NativeDropdownComponent;
  let fixture: ComponentFixture<NativeDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
