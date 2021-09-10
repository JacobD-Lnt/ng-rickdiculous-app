import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeSearchbarComponent } from './episode-searchbar.component';

describe('EpisodeSearchbarComponent', () => {
  let component: EpisodeSearchbarComponent;
  let fixture: ComponentFixture<EpisodeSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeSearchbarComponent ]
    })
    .compileComponents();
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
