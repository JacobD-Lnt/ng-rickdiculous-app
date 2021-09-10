import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EpisodesPage } from 'src/app/episodes-page';
import { HttpGetService } from 'src/app/http-get.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episode-searchbar',
  templateUrl: './episode-searchbar.component.html',
  styleUrls: ['./episode-searchbar.component.css']
})
export class EpisodeSearchbarComponent implements OnInit {
  public epSearchForm: FormGroup;
  public epPage: EpisodesPage = new EpisodesPage();
  public searchData = {
    name: '',
    episode: ''
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
        'Episode: ',
        p.get('episode'),
      );

      this.pageNum = parseInt(p.get('page'));

      let searchTerms = {
        name: '',
        episode: '',
      };

      // console.log('Name:', p.get('name'));
      if (p.get('name') != '') {
        searchTerms['name'] = p.get('name');
      }

      if (p.get('episode') != '') {
        searchTerms['status'] = p.get('status');
      }


      this.httpGetService
        .getSearchResponseForEpisode(this.pageNum, searchTerms)
        .subscribe(
          (data) => ((this.epPage = data), console.log(this.epPage))
        );
    });

    this.epSearchForm = this.formBuilder.group({
      searchName: [''],
      searchEpisode: ['']
    });
  }

handleSubmit() {
  console.log('Submit');

  let searchTerms = {
    name: '',
    episode: '',
  };

  searchTerms['name'] = this.epSearchForm.controls.searchName.value;
  searchTerms['episode'] = this.epSearchForm.controls.searchEpisode.value;

  this.searchData = searchTerms;


}

}
