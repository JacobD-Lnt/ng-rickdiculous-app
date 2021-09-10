import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationLinkComponent } from './location-link.component';
import { LocationData } from 'src/app/location-data';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpGetService } from 'src/app/http-get.service';

describe('LocationLinkComponent', () => {
  let component: LocationLinkComponent;
  let fixture: ComponentFixture<LocationLinkComponent>;
  let service = HttpGetService;
  let httpTestController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationLinkComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [HttpGetService],
    }).compileComponents();
    httpTestController = TestBed.inject(HttpTestingController);
    service = HttpGetService;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
