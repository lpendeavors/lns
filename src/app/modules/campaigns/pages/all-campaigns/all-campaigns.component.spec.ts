import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCampaignsComponent } from './all-campaigns.component';

describe('AllCampaignsComponent', () => {
  let component: AllCampaignsComponent;
  let fixture: ComponentFixture<AllCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
