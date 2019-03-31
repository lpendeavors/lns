import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsVerifyComponent } from './sms-verify.component';

describe('SmsVerifyComponent', () => {
  let component: SmsVerifyComponent;
  let fixture: ComponentFixture<SmsVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
