import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { EpisodeData } from 'src/app/episode-data';
import { HttpGetService } from 'src/app/http-get.service';


@Component({
  selector: 'app-episode-link',
  templateUrl: './episode-link.component.html',
  styleUrls: ['./episode-link.component.css'],
})
export class EpisodeLinkComponent implements OnInit {
  // @Input() episodeData: EpisodeData = new EpisodeData();
  @Input() epNum: number=-1;
  epData:EpisodeData=new EpisodeData();
  constructor(    private httpGetService: HttpGetService,
    private http: HttpClient,
    ) {}

  ngOnInit(): void {

    this.httpGetService
    .getOneEpisodeData(this.epNum)
    .subscribe(
      (data) => (
        (this.epData = data),
        console.log('first id: ', this.epData.id)
      )
    );
  }
}
