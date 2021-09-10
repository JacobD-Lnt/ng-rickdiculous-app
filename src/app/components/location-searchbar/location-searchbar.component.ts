import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LocationPage } from 'src/app/location-page';
import { HttpGetService } from 'src/app/http-get.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location-searchbar',
  templateUrl: './location-searchbar.component.html',
  styleUrls: ['./location-searchbar.component.css']
})
export class LocationSearchbarComponent implements OnInit {
  public locSearchForm: FormGroup;
  public locPage: LocationPage = new LocationPage();
  public searchData = {
    name: '',
    type: '',
    dimension:''
  };
  public pageNum = -1;

  constructor(
    private formBuilder: FormBuilder,
    private httpGetService: HttpGetService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p: ParamMap) => {
      console.log(
        'Page: ',
        p.get('page'),
        'Name: ',
        p.get('name'),
        'Type: ',
        p.get('type'),
        'Dimension: ',
        p.get('simension'),
      );

      this.pageNum = parseInt(p.get('page'));

      let searchTerms = {
        name: '',
        type: '',
        dimension:''
      };

      if (p.get('name') != '') {
        searchTerms['name'] = p.get('name');
      }

      if (p.get('type') != '') {
        searchTerms['type'] = p.get('type');
      }

      if (p.get('dimension') != '') {
        searchTerms['dimension'] = p.get('dimension');
      }


      this.httpGetService
        .getSearchResponseForLocation(this.pageNum, searchTerms)
        .subscribe(
          (data) => ((this.locPage = data), console.log(this.locPage))
        );
    });

    this.locSearchForm = this.formBuilder.group({
      searchName: [''],
      searchType: [''],
      searchDimension:['']

    });
  }

handleSubmit() {
  console.log('Submit');

  let searchTerms = {
    name: '',
    type: '',
    dimension:''
  };

  searchTerms['name'] = this.locSearchForm.controls.searchName.value;
  searchTerms['type'] = this.locSearchForm.controls.searchType.value;
  searchTerms['dimension'] = this.locSearchForm.controls.searchDimension.value;

  this.searchData = searchTerms;



  }

}
