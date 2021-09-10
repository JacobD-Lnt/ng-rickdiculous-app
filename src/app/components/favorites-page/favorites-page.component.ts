import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/favorites.service';
import { EpisodeLinkComponent } from '../episode-link/episode-link.component';
import { CharacterLinkComponent } from '../character-link/character-link.component';
import { LocationLinkComponent } from '../location-link/location-link.component';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {
  favEps: string[];
  favChars: string[];
  favLocs: string[];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService
      .getEpisodes()
      .subscribe((data) => (this.favEps = data));

    this.favoritesService
      .getCharacters()
      .subscribe((data) => (this.favChars = data));

    this.favoritesService
      .getLocations()
      .subscribe((data) => (this.favLocs = data));
  }
}
