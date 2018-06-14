import { TestBed, inject } from '@angular/core/testing';

import { PlayMusicAPIService } from './play-music-api.service';

describe('PlayMusicAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayMusicAPIService]
    });
  });

  it('should be created', inject([PlayMusicAPIService], (service: PlayMusicAPIService) => {
    expect(service).toBeTruthy();
  }));
});
