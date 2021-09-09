import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpGetService } from 'src/app/http-get.service';
import { CharacterData } from 'src/app/character-data';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.css'],
})
export class CharacterDescriptionComponent implements OnInit {
  charNum: number = -1;
  charDescription: CharacterData = new CharacterData();

  constructor(
    private httpGetService: HttpGetService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p: ParamMap) => {
      console.log('charNum: ', p.get('charNum'));
      this.charNum = parseInt(p.get('charNum'));

      this.httpGetService
        .getOneCharacterData('' + this.charNum)
        .subscribe(
          (data) => (
            (this.charDescription = data),
            console.log('first id: ', this.charDescription.id)
          )
        );
    });
  }
}
