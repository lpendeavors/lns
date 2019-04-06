import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignMessageComponent } from './campaign-message.component';

describe('CampaignMessageComponent', () => {
  let component: CampaignMessageComponent;
  let fixture: ComponentFixture<CampaignMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
