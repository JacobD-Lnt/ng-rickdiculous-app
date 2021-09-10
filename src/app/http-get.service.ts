import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EpisodesPage } from './episodes-page';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { EpisodeData } from './episode-data';
import { CharacterData } from './character-data';
import { CharactersPage } from './characters-page';
import { LocationPage } from './location-page';
import { LocationData } from './location-data';

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

  getOneEpisodeData(id: number) {
    let epUrl = this.mainUrl + '/episode/' + id;
    return this.http.get<EpisodeData>(epUrl);
  }

  getOneCharacterData(id: string) {
    let charUrl = this.mainUrl + '/character/' + id;
    console.log('character link: ', charUrl);
    return this.http.get<CharacterData>(charUrl);
  }

  getAllCharacterData(page: number) {
    let charUrl = this.mainUrl + '/character?page=' + page;
    return this.http.get<CharactersPage>(charUrl);
  }

  getAllLocationData(page: number) {
    let locUrl = this.mainUrl + '/location?page=' + page;
    return this.http.get<LocationPage>(locUrl);
  }

  getOneLocationData(id: number) {
    let locUrl = this.mainUrl + '/location/' + id;
    return this.http.get<LocationData>(locUrl);
  }

  getSearchResponseForCharacter(keywords: object): Observable<CharactersPage> {
    let searchUrl = this.mainUrl + '/character/?';
    let searchIndex = 0;

    if (keywords['name'] != null) {
      searchUrl += 'name=' + keywords['name'];
      searchIndex++;
    }

    if (keywords['status'] != null) {
      if (searchIndex > 0) {
        searchUrl += '&';
      }

      searchUrl += 'status=' + keywords['status'];
      searchIndex++;
    }

    return this.http.get<CharactersPage>(searchUrl);
  }

  getSearchResponseForEpisode(keywords: object): Observable<EpisodesPage> {
    return;
  }

  getSearchResponseForLocation(keywords: object): Observable<LocationPage> {
    return;
  }
}
