import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsSettingsComponent } from './reviews-settings.component';

describe('ReviewsSettingsComponent', () => {
  let component: ReviewsSettingsComponent;
  let fixture: ComponentFixture<ReviewsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
