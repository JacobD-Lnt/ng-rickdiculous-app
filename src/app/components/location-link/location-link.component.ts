import { Component, Input, OnInit } from '@angular/core';
import { LocationData } from 'src/app/location-data';
import { HttpGetService } from 'src/app/http-get.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location-link',
  templateUrl: './location-link.component.html',
  styleUrls: ['./location-link.component.css'],
})
export class LocationLinkComponent implements OnInit {
  @Input() locUrl: string = '';
  locData: LocationData = new LocationData();

  constructor(
    private httpGetService: HttpGetService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let temp: string = this.locUrl.split('/')[5];
    // console.log('temp: ', temp);

    this.httpGetService
      .getOneLocationData(parseInt(temp))
      .subscribe((data) => (this.locData = data));
  }
}
