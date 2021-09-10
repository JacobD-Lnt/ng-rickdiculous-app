import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpGetService } from 'src/app/http-get.service';

import { CharacterLinkComponent } from '../character-link/character-link.component';
import { CharactersPage } from 'src/app/characters-page';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  pageNum: number = -1;
  characters: CharactersPage = new CharactersPage();

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
        .getAllCharacterData(this.pageNum)
        .subscribe((data) => (this.characters = data));
    });
  }
}
