import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSetComponent } from './side-nav-set.component';

describe('SidenavSetComponent', () => {
  let component: SidenavSetComponent;
  let fixture: ComponentFixture<SidenavSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
