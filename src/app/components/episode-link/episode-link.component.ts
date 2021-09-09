import { Component, Input, OnInit } from '@angular/core';
import { EpisodeData } from 'src/app/episode-data';

@Component({
  selector: 'app-episode-link',
  templateUrl: './episode-link.component.html',
  styleUrls: ['./episode-link.component.css'],
})
export class EpisodeLinkComponent implements OnInit {
  @Input() episodeData: EpisodeData = new EpisodeData();

  constructor() {}

  ngOnInit(): void {}
}
