import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { EpisodesPage } from 'src/app/episodes-page';
import { EpisodeLinkComponent } from '../episode-link/episode-link.component';
import { HttpGetService } from 'src/app/http-get.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent implements OnInit {
  pageNum: number = -1;
  episodes: EpisodesPage = new EpisodesPage();

  constructor(
    private httpGetService: HttpGetService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p: ParamMap) => {
      console.log('Page:', p.get('page'));
      this.pageNum = parseInt(p.get('page'));

      this.httpGetService
        .getAllEpisodeData(this.pageNum)
        .subscribe(
          (data) => (
            (this.episodes = data),
            console.log('Show episodes on page: ', this.pageNum),
            console.log('first id: ', this.episodes.results[0].id)
          )
        );
    });

    // this.route.paramMap.subscribe((p: ParamMap) => {
    //   this.a = parseInt(p.get('a')!);
    //   this.b = parseInt(p.get('b')!);
    //   this.sum = this.a + this.b + this.x + this.y;
    // });
  }
}
