import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EpisodesPage } from './episodes-page';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { EpisodeData } from './episode-data';
import { CharacterData } from './character-data';
import { CharactersPage } from './characters-page';
import { LocationPage } from './location-page';

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
    let epUrl = this.mainUrl + '/character/' + id;
    console.log('character link: ', epUrl);
    return this.http.get<CharacterData>(epUrl);
  }

  getAllCharacterData(page: number) {
    let epUrl = this.mainUrl + '/character?page=' + page;
    return this.http.get<CharactersPage>(epUrl);
  }

  getAllLocationData(page:number){

    let epUrl=this.mainUrl+'location?page='+page;
    return this.http.get<LocationPage>(epUrl);
  }
}
