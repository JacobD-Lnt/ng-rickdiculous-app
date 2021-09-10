import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeDescriptionComponent } from './components/episode-description/episode-description.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDescriptionComponent } from './components/character-description/character-description.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationDescriptionComponent } from './components/location-description/location-description.component';
import { CharacterSearchbarComponent } from './components/character-searchbar/character-searchbar.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'episodes/:page', component: EpisodesComponent },
  {
    path: 'episodeDescription/:episodeNum',
    component: EpisodeDescriptionComponent,
  },
  { path: 'characters/:page', component: CharactersComponent },
  {
    path: 'charDescription/:charNum',
    component: CharacterDescriptionComponent,
  },

  { path: 'locations/:page', component: LocationsComponent },

  {
    path: 'locationDescription/:locNum',
    component: LocationDescriptionComponent,
  },
  {path: 'charSearch', component: CharacterSearchbarComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
