import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {FjDragAndDropComponent} from './drag-and-drop.component';


describe('DragAndDropComponent', () => {
  let component: FjDragAndDropComponent;
  let fixture: ComponentFixture<FjDragAndDropComponent>;

  const sampleFile = [
    {
      height: 169,
      lastModified: 1524316048000,
      name: 'geek.png',
      baseURI: 'http://localhost:4200/',
      childElementCount: 2
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FjDragAndDropComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FjDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Sould set the showPlaceholder to false
   * when an image is uploaded
   */
  it('should change showPlaceholder to false', () => {
    component.onFileAdded(sampleFile);
    expect(component.showPlaceholder).toEqual(false);
  });

  /**
   * Sould set the showPlaceholder to true
   * when uploaded image is removed
   * to show the placeholder for image preview
   */
  it('should change showPlaceholder to true', () => {
    component.onFileRemoved(sampleFile);
    expect(component.showPlaceholder).toEqual(true);
  });

  /**
   * Check that the dropzone file select trigger element class is defined
   */
  it('should have the select trigger class defined', () => {
    expect(
      fixture.debugElement.query(By.css('.trigger-upload')) === null
    ).not.toBeTruthy();
  });

  /**
   * test for getParentChanges()
   */
  it('should call reset() and set showPlaceholder value', () => {
    const mockChanges = {
      removeFile: {
        currentValue: true
      },
      noFileSelected: {
        currentValue: true
      }
    };
    expect(component.getParentChanges).toBeDefined();
    component.getParentChanges(mockChanges);
    expect(component.showPlaceholder).toBe(true || false);
    expect(component.noFileSelected).toBe(true || false);
  });
});
