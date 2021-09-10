import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpGetService } from 'src/app/http-get.service';
import { LocationData } from 'src/app/location-data';
import { CharacterLinkComponent } from '../character-link/character-link.component';

@Component({
  selector: 'app-location-description',
  templateUrl: './location-description.component.html',
  styleUrls: ['./location-description.component.css'],
})
export class LocationDescriptionComponent implements OnInit {
  locNum: number = -1;
  locDescription: LocationData = new LocationData();

  constructor(
    private httpGetService: HttpGetService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p: ParamMap) => {
      console.log('locNum: ', p.get('locNum'));
      this.locNum = parseInt(p.get('locNum'));

      this.httpGetService
        .getOneLocationData(this.locNum)
        .subscribe(
          (data) => (
            (this.locDescription = data),
            console.log('first id: ', this.locDescription.id)
          )
        );
    });
  }
}
