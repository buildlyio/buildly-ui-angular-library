import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreyjaComponent } from './freyja.component';

describe('FreyjaComponent', () => {
  let component: FreyjaComponent;
  let fixture: ComponentFixture<FreyjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreyjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreyjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
