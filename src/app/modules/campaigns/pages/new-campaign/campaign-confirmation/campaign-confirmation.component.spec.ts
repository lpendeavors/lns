import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignConfirmationComponent } from './campaign-confirmation.component';

describe('CampaignConfirmationComponent', () => {
  let component: CampaignConfirmationComponent;
  let fixture: ComponentFixture<CampaignConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
