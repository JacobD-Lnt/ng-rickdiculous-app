import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeDescriptionComponent } from './components/episode-description/episode-description.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'episodes/:page', component: EpisodesComponent },
  {path: 'episodeDescription/:episodeNum', component: EpisodeDescriptionComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
