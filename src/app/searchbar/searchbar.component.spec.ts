import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EpisodesPage } from 'src/app/episodes-page';
import { EpisodeLinkComponent } from '../components/episode-link/episode-link.component';
import { EpisodeData } from 'src/app/episode-data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpGetService } from 'src/app/http-get.service';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;
  let service = HttpGetService;
  let httpTestController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchbarComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [HttpGetService],
    }).compileComponents();
    httpTestController = TestBed.inject(HttpTestingController);
    service = HttpGetService;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
