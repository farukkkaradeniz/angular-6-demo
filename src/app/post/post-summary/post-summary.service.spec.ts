import { TestBed, inject } from '@angular/core/testing';

import { PostSummaryService } from './post-summary.service';

describe('PostSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostSummaryService]
    });
  });

  it('should be created', inject([PostSummaryService], (service: PostSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
