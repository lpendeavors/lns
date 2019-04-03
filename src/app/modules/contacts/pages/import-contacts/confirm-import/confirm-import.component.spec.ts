import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmImportComponent } from './confirm-import.component';

describe('ConfirmImportComponent', () => {
  let component: ConfirmImportComponent;
  let fixture: ComponentFixture<ConfirmImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
