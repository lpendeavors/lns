import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllConversationsComponent } from './all-conversations.component';

describe('AllConversationsComponent', () => {
  let component: AllConversationsComponent;
  let fixture: ComponentFixture<AllConversationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllConversationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllConversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
