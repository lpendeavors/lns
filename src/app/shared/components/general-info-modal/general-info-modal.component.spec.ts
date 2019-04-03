import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoModalComponent } from './general-info-modal.component';

describe('GeneralInfoModalComponent', () => {
  let component: GeneralInfoModalComponent;
  let fixture: ComponentFixture<GeneralInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
