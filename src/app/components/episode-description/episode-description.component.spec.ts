import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDescriptionComponent } from './episode-description.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpGetService } from 'src/app/http-get.service';

describe('EpisodeDescriptionComponent', () => {
  let component: EpisodeDescriptionComponent;
  let fixture: ComponentFixture<EpisodeDescriptionComponent>;
  let service = HttpGetService;
  let httpTestController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeDescriptionComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [HttpGetService],
    })
    .compileComponents();
    httpTestController = TestBed.inject(HttpTestingController);
    service = HttpGetService;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
