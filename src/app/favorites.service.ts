import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  // store urls here
  favEps: string[];
  favChars: string[];
  favLocs: string[];

  constructor() {
    const favEps = localStorage.getItem('favoriteEpisodes');
    if (!favEps) {
      localStorage.setItem('favoriteEpisodes', JSON.stringify([]));
    }
    this.favEps = JSON.parse(localStorage.getItem('favoriteEpisodes')) || {};

    const favChars = localStorage.getItem('favoriteCharacters');
    if (!favChars) {
      localStorage.setItem('favoriteCharacters', JSON.stringify([]));
    }
    this.favChars =
      JSON.parse(localStorage.getItem('favoriteCharacters')) || {};

    const favLocs = localStorage.getItem('favoriteLocations');
    if (!favLocs) {
      localStorage.setItem('favoriteLocations', JSON.stringify([]));
    }
    this.favLocs = JSON.parse(localStorage.getItem('favoriteLocations')) || {};

    // (reset values)
    // localStorage.setItem('favoriteEpisodes', JSON.stringify([]));
    // localStorage.setItem('favoriteCharacters', JSON.stringify([]));
    // localStorage.setItem('favoriteLocations', JSON.stringify([]));
  }

  getEpisodes(): Observable<string[]> {
    return of(this.favEps);
  }

  getCharacters(): Observable<string[]> {
    return of(this.favChars);
  }

  getLocations(): Observable<string[]> {
    return of(this.favLocs);
  }

  updateEp(url: string) {
    const userFavs = this.favEps;
    if (!userFavs.includes(url)) {
      userFavs.push(url);
      localStorage.setItem('favoriteEpisodes', JSON.stringify(userFavs));
    }
  }

  updateChar(url: string) {
    const userFavs = this.favChars;
    if (!userFavs.includes(url)) {
      userFavs.push(url);
      localStorage.setItem('favoriteCharacters', JSON.stringify(userFavs));
    }
  }

  updateLoc(url: string) {
    const userFavs = this.favLocs;
    if (!userFavs.includes(url)) {
      userFavs.push(url);
      localStorage.setItem('favoriteLocations', JSON.stringify(userFavs));
    }
  }
}
