import { TestBed, inject } from '@angular/core/testing';

import { MusicSearchAPIService } from './music-search-api.service';

describe('MusicSearchAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicSearchAPIService]
    });
  });

  it('should be created', inject([MusicSearchAPIService], (service: MusicSearchAPIService) => {
    expect(service).toBeTruthy();
  }));
});
