import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpGetService } from 'src/app/http-get.service';
import { LocationPage } from 'src/app/location-page';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  pgNum:number=-1;
  locations:LocationPage=new LocationPage();

  constructor(private httpGetService: HttpGetService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((p: ParamMap) => {
      console.log('Page:', p.get('page'));
      this.pgNum = parseInt(p.get('page'));

      this.httpGetService
        .getAllLocationData(this.pgNum)
        .subscribe(
          (data) => (
            (this.locations = data),
            console.log('Show locations on page: ', this.pgNum),
            console.log('first id: ', this.locations.results[0].id)
          )
        );
          })
  }

}
