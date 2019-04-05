import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomContactFieldsComponent } from './custom-contact-fields.component';

describe('CustomContactFieldsComponent', () => {
  let component: CustomContactFieldsComponent;
  let fixture: ComponentFixture<CustomContactFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomContactFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomContactFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
