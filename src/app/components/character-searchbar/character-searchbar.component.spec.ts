import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSearchbarComponent } from './character-searchbar.component';

describe('CharacterSearchbarComponent', () => {
  let component: CharacterSearchbarComponent;
  let fixture: ComponentFixture<CharacterSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSearchbarComponent ]
    })
    .compileComponents();
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
