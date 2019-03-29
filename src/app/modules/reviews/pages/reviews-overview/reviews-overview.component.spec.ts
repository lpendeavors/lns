import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsOverviewComponent } from './reviews-overview.component';

describe('ReviewsOverviewComponent', () => {
  let component: ReviewsOverviewComponent;
  let fixture: ComponentFixture<ReviewsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
