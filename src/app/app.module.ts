import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeLinkComponent } from './components/episode-link/episode-link.component';
import { EpisodeDescriptionComponent } from './components/episode-description/episode-description.component';
import { CharacterLinkComponent } from './components/character-link/character-link.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDescriptionComponent } from './components/character-description/character-description.component';
import { LocationsComponent } from './components/locations/locations.component';

@NgModule({
  declarations: [AppComponent, EpisodesComponent, HomeComponent, EpisodeLinkComponent, EpisodeDescriptionComponent, CharacterLinkComponent, CharactersComponent, CharacterDescriptionComponent, LocationsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
