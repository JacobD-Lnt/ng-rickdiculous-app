import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EpisodesPage } from './episodes-page';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpGetService {
  constructor(private http: HttpClient) {}

  mainUrl: string = 'https://rickandmortyapi.com/api';

  getAllEpisodeData(page: number) {
    let epUrl = this.mainUrl + '/episode?page=' + page;
    return this.http.get<EpisodesPage>(epUrl);
  }

  // getOneEpisodeData(id: number) {
  //   let epUrl = this.mainUrl + '/episode/' + id;
  //   return this.http.get<EpisodeData>(epUrl);
  // }
}
