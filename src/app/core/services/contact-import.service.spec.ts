import { TestBed } from '@angular/core/testing';

import { ContactImportService } from './contact-import.service';

describe('ContactImportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactImportService = TestBed.get(ContactImportService);
    expect(service).toBeTruthy();
  });
});
