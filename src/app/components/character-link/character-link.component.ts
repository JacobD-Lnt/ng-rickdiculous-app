import { Component, Input, OnInit } from '@angular/core';
import { CharacterData } from 'src/app/character-data';
import { HttpGetService } from 'src/app/http-get.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-link',
  templateUrl: './character-link.component.html',
  styleUrls: ['./character-link.component.css'],
})
export class CharacterLinkComponent implements OnInit {
  @Input() charUrl: string = '';
  charData: CharacterData = new CharacterData();

  constructor(
    private httpGetService: HttpGetService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let temp: string = this.charUrl.split('/')[5];
    console.log('temp: ', temp);

    this.httpGetService
      .getOneCharacterData(temp)
      .subscribe(
        (data) => (
          (this.charData = data), console.log('first id: ', this.charData.id)
        )
      );
  }
}
