import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDescriptionComponent } from './character-description.component';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpGetService } from 'src/app/http-get.service';

describe('CharacterDescriptionComponent', () => {
  let component: CharacterDescriptionComponent;
  let fixture: ComponentFixture<CharacterDescriptionComponent>;
  let service = HttpGetService;
  let httpTestController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterDescriptionComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [HttpGetService],
    }).compileComponents();
    httpTestController = TestBed.inject(HttpTestingController);
    service = HttpGetService;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
