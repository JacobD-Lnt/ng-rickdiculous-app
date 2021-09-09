import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodeData } from 'src/app/episode-data';
import { EpisodeLinkComponent } from './episode-link.component';

describe('EpisodeLinkComponent', () => {
  let component: EpisodeLinkComponent;
  let fixture: ComponentFixture<EpisodeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpisodeLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
