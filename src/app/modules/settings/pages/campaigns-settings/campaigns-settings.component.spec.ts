import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsSettingsComponent } from './campaigns-settings.component';

describe('CampaignsSettingsComponent', () => {
  let component: CampaignsSettingsComponent;
  let fixture: ComponentFixture<CampaignsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
