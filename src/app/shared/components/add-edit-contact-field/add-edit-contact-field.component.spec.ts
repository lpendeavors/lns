import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditContactFieldComponent } from './add-edit-contact-field.component';

describe('AddEditContactFieldComponent', () => {
  let component: AddEditContactFieldComponent;
  let fixture: ComponentFixture<AddEditContactFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditContactFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditContactFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
