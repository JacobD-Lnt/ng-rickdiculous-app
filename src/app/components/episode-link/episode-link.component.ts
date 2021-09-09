import { Component, Input, OnInit } from '@angular/core';
import { EpisodeData } from 'src/app/episode-data';
import { HttpGetService } from 'src/app/http-get.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episode-link',
  templateUrl: './episode-link.component.html',
  styleUrls: ['./episode-link.component.css'],
})
export class EpisodeLinkComponent implements OnInit {
  // @Input() episodeData: EpisodeData = new EpisodeData();
  @Input() epUrl: string = '';
  epData: EpisodeData = new EpisodeData();

  constructor(
    private httpGetService: HttpGetService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let temp: string = this.epUrl.split('/')[5];
    console.log('temp: ', temp);

    this.httpGetService
      .getOneEpisodeData(parseInt(temp))
      .subscribe(
        (data) => (
          (this.epData = data), console.log('first id: ', this.epData.id)
        )
      );
  }
}
