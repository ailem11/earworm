import { TestBed, inject } from '@angular/core/testing';

import { SongHelperService } from './song-helper.service';

describe('SongHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongHelperService]
    });
  });

  it('should be created', inject([SongHelperService], (service: SongHelperService) => {
    expect(service).toBeTruthy();
  }));
});
