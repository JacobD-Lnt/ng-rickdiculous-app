import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CharactersPage } from 'src/app/characters-page';
import { HttpGetService } from 'src/app/http-get.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CharacterLinkComponent } from '../character-link/character-link.component';

@Component({
  selector: 'app-character-searchbar',
  templateUrl: './character-searchbar.component.html',
  styleUrls: ['./character-searchbar.component.css'],
})
export class CharacterSearchbarComponent implements OnInit {
  public charSearchForm: FormGroup;
  public charPage: CharactersPage = new CharactersPage();
  public searchData = {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  };
  public pageNum = -1;

  constructor(
    private formBuilder: FormBuilder,
    private httpGetService: HttpGetService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p: ParamMap) => {
      console.log(
        'Page: ',
        p.get('page'),
        'Name: ',
        p.get('name'),
        'Status: ',
        p.get('status'),
        'Species: ',
        p.get('species'),
        'Type: ',
        p.get('type'),
        'Gender: ',
        p.get('gender')
      );

      this.pageNum = parseInt(p.get('page'));

      let searchTerms = {
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
      };

      // console.log('Name:', p.get('name'));
      if (p.get('name') != '') {
        searchTerms['name'] = p.get('name');
      }

      if (p.get('status') != '') {
        searchTerms['status'] = p.get('status');
      }

      if (p.get('species') != '') {
        searchTerms['species'] = p.get('species');
      }

      if (p.get('type') != '') {
        searchTerms['type'] = p.get('type');
      }

      if (p.get('gender') != '') {
        searchTerms['gender'] = p.get('gender');
      }

      this.httpGetService
        .getSearchResponseForCharacter(this.pageNum, searchTerms)
        .subscribe(
          (data) => ((this.charPage = data), console.log(this.charPage))
        );
    });

    this.charSearchForm = this.formBuilder.group({
      searchName: [''],
      searchStatus: [''],
      searchSpecies: [''],
      searchType: [''],
      searchGender: [''],
    });


  }


  handleSubmit() {
    console.log('Submit');

    let searchTerms = {
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
    };

    searchTerms['name'] = this.charSearchForm.controls.searchName.value;
    searchTerms['status'] = this.charSearchForm.controls.searchStatus.value;
    searchTerms['species'] = this.charSearchForm.controls.searchSpecies.value;
    searchTerms['type'] = this.charSearchForm.controls.searchType.value;
    searchTerms['gender'] = this.charSearchForm.controls.searchGender.value;

    this.searchData = searchTerms;


  }
}
