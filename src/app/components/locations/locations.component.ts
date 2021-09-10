import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpGetService } from 'src/app/http-get.service';
import { LocationPage } from 'src/app/location-page';
import { LocationLinkComponent } from '../location-link/location-link.component';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  pageNum: number = -1;
  locations: LocationPage = new LocationPage();

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
        .getAllLocationData(this.pageNum)
        .subscribe((data) => (this.locations = data));
    });
  }
}
