import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMenuComponent } from './menu.component';

describe('DemoMenuComponent', () => {
  let component: DemoMenuComponent;
  let fixture: ComponentFixture<DemoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
