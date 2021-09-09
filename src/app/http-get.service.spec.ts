import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpGetService } from './http-get.service';

describe('HttpGetService', () => {
  let service: HttpGetService;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpGetService],
    });
    httpTestController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HttpGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send get request to right webpage', () => {
    service.getAllEpisodeData(1).subscribe(); // start request

    httpTestController.expectOne(
      'https://rickandmortyapi.com/api/episode?page=1'
    );
    httpTestController.verify();
  });

  it('should get all episodes from a specific page', () => {
    service.getAllEpisodeData(1).subscribe((data) => {
      expect(data.results[0].id).toEqual(1);
    });

    service.getAllEpisodeData(2).subscribe((data) => {
      expect(data.results[0].id).toEqual(21);
    });

    service.getAllEpisodeData(3).subscribe((data) => {
      expect(data.results[0].id).toEqual(41);
    });
  });
});
