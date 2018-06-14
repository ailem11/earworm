import { TestBed, inject } from '@angular/core/testing';

import { SpeechToTextAPIService } from './speech-to-text-api.service';

describe('SpeechToTextAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeechToTextAPIService]
    });
  });

  it('should be created', inject([SpeechToTextAPIService], (service: SpeechToTextAPIService) => {
    expect(service).toBeTruthy();
  }));
});
