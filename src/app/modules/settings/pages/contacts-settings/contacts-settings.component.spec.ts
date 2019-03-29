import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsSettingsComponent } from './contacts-settings.component';

describe('ContactsSettingsComponent', () => {
  let component: ContactsSettingsComponent;
  let fixture: ComponentFixture<ContactsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
