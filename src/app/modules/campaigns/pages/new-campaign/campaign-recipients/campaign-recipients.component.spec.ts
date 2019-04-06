import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignRecipientsComponent } from './campaign-recipients.component';

describe('CampaignRecipientsComponent', () => {
  let component: CampaignRecipientsComponent;
  let fixture: ComponentFixture<CampaignRecipientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignRecipientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignRecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
