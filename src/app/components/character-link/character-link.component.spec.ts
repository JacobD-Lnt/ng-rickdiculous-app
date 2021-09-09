import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterLinkComponent } from './character-link.component';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpGetService } from 'src/app/http-get.service';

describe('CharacterLinkComponent', () => {
  let component: CharacterLinkComponent;
  let fixture: ComponentFixture<CharacterLinkComponent>;
  let service = HttpGetService;
  let httpTestController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterLinkComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [HttpGetService],
    }).compileComponents();
    httpTestController = TestBed.inject(HttpTestingController);
    service = HttpGetService;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
