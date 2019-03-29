import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSettingsComponent } from './billing-settings.component';

describe('BillingSettingsComponent', () => {
  let component: BillingSettingsComponent;
  let fixture: ComponentFixture<BillingSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
