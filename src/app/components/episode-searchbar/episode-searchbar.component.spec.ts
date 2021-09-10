import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpGetService } from 'src/app/http-get.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EpisodeSearchbarComponent } from './episode-searchbar.component';

describe('EpisodeSearchbarComponent', () => {
  let component: EpisodeSearchbarComponent;
  let fixture: ComponentFixture<EpisodeSearchbarComponent>;
  let service = HttpGetService;
  let httpTestController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeSearchbarComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [HttpGetService],
    })
    .compileComponents();
    httpTestController = TestBed.inject(HttpTestingController);
    service = HttpGetService;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
