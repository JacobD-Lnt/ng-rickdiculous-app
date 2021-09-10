import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSearchbarComponent } from './character-searchbar.component';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpGetService } from 'src/app/http-get.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CharacterSearchbarComponent', () => {
  let component: CharacterSearchbarComponent;
  let fixture: ComponentFixture<CharacterSearchbarComponent>;
  let service = HttpGetService;
  let httpTestController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterSearchbarComponent],
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
    fixture = TestBed.createComponent(CharacterSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
