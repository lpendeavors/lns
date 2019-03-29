import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSegmentComponent } from './add-edit-segment.component';

describe('AddEditSegmentComponent', () => {
  let component: AddEditSegmentComponent;
  let fixture: ComponentFixture<AddEditSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
