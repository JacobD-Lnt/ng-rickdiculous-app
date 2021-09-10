import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CharactersPage } from 'src/app/characters-page';
import { HttpGetService } from 'src/app/http-get.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-searchbar',
  templateUrl: './character-searchbar.component.html',
  styleUrls: ['./character-searchbar.component.css']
})
export class CharacterSearchbarComponent implements OnInit {

  public charSearchForm: FormGroup;
  public charPage: CharactersPage=new CharactersPage();
  public searchData={};

  constructor(private formBuilder: FormBuilder,
    private httpGetService: HttpGetService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.charSearchForm = this.formBuilder.group({
      searchName: [''],
      searchStatus:[''],
      searchSpecies:[''],
      searchType:[''],
      searchGender:['']

    });

    this.httpGetService.getSearchResponseForCharacter(this.searchData).subscribe(
      (data) => (
        (this.charPage = data)
    )

  }


  // formCheck(): boolean {
  //   if (this.charSearchForm.controls.search.valid === true) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  handleSubmit() {

    let searchTerms= {};

    searchTerms['name']=this.charSearchForm.controls.searchName.value;
    searchTerms['status']=this.charSearchForm.controls.searchStatus.value;
    searchTerms['species']=this.charSearchForm.controls.searchSpecies.value;
    searchTerms['type']=this.charSearchForm.controls.searchType.value;
    searchTerms['gender']=this.charSearchForm.controls.searchGender.value;

    this.searchData=searchTerms;

    // this.httpGetservice.getSearchResponseForCharacter(searchTerms)
  }

}
