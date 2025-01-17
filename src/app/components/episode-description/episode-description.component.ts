import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpGetService } from 'src/app/http-get.service';
import { EpisodeData } from 'src/app/episode-data';
import { CharacterLinkComponent } from '../character-link/character-link.component';
import { FavoritesService } from 'src/app/favorites.service';

@Component({
  selector: 'app-episode-description',
  templateUrl: './episode-description.component.html',
  styleUrls: ['./episode-description.component.css'],
})
export class EpisodeDescriptionComponent implements OnInit {
  episodeNum: number = -1;
  epDescription: EpisodeData = new EpisodeData();

  constructor(
    private httpGetService: HttpGetService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p: ParamMap) => {
      console.log('episodeNum: ', p.get('episodeNum'));
      this.episodeNum = parseInt(p.get('episodeNum'));

      this.httpGetService
        .getOneEpisodeData(this.episodeNum)
        .subscribe(
          (data) => (
            (this.epDescription = data),
            console.log('first id: ', this.epDescription.id)
          )
        );
    });
  }

  addFav() {
    this.favoritesService.updateEp(this.epDescription.url);
  }
}
