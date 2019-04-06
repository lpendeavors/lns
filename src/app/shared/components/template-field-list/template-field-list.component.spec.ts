import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFieldListComponent } from './template-field-list.component';

describe('TemplateFieldListComponent', () => {
  let component: TemplateFieldListComponent;
  let fixture: ComponentFixture<TemplateFieldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFieldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
