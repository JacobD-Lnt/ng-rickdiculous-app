import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpGetService } from './http-get.service';
import { CharactersPage } from './characters-page';

describe('HttpGetService', () => {
  let service: HttpGetService;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpGetService],
    });
    httpTestController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HttpGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send get request to right webpage', () => {
    service.getAllEpisodeData(1).subscribe(); // start request

    httpTestController.expectOne(
      'https://rickandmortyapi.com/api/episode?page=1'
    );
    httpTestController.verify();
  });

  it('should get all episodes from a specific page', () => {
    service.getAllEpisodeData(1).subscribe((data) => {
      expect(data.results[0].id).toEqual(1);
    });

    service.getAllEpisodeData(2).subscribe((data) => {
      expect(data.results[0].id).toEqual(21);
    });

    service.getAllEpisodeData(3).subscribe((data) => {
      expect(data.results[0].id).toEqual(41);
    });
  });

  it('should get search results for character name', () => {
    let searchQuery = { name: 'morty' };
    let searchResults: CharactersPage;
    let page: CharactersPage = {
      info: {
        count: 54,
        pages: 3,
        next: 'https://rickandmortyapi.com/api/character/?page=2&name=morty',
        prev: null,
      },
      results: [
        {
          id: 2,
          name: 'Morty Smith',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
          },
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          episode: [
            'https://rickandmortyapi.com/api/episode/1',
            'https://rickandmortyapi.com/api/episode/2',
            'https://rickandmortyapi.com/api/episode/3',
            'https://rickandmortyapi.com/api/episode/4',
            'https://rickandmortyapi.com/api/episode/5',
            'https://rickandmortyapi.com/api/episode/6',
            'https://rickandmortyapi.com/api/episode/7',
            'https://rickandmortyapi.com/api/episode/8',
            'https://rickandmortyapi.com/api/episode/9',
            'https://rickandmortyapi.com/api/episode/10',
            'https://rickandmortyapi.com/api/episode/11',
            'https://rickandmortyapi.com/api/episode/12',
            'https://rickandmortyapi.com/api/episode/13',
            'https://rickandmortyapi.com/api/episode/14',
            'https://rickandmortyapi.com/api/episode/15',
            'https://rickandmortyapi.com/api/episode/16',
            'https://rickandmortyapi.com/api/episode/17',
            'https://rickandmortyapi.com/api/episode/18',
            'https://rickandmortyapi.com/api/episode/19',
            'https://rickandmortyapi.com/api/episode/20',
            'https://rickandmortyapi.com/api/episode/21',
            'https://rickandmortyapi.com/api/episode/22',
            'https://rickandmortyapi.com/api/episode/23',
            'https://rickandmortyapi.com/api/episode/24',
            'https://rickandmortyapi.com/api/episode/25',
            'https://rickandmortyapi.com/api/episode/26',
            'https://rickandmortyapi.com/api/episode/27',
            'https://rickandmortyapi.com/api/episode/28',
            'https://rickandmortyapi.com/api/episode/29',
            'https://rickandmortyapi.com/api/episode/30',
            'https://rickandmortyapi.com/api/episode/31',
            'https://rickandmortyapi.com/api/episode/32',
            'https://rickandmortyapi.com/api/episode/33',
            'https://rickandmortyapi.com/api/episode/34',
            'https://rickandmortyapi.com/api/episode/35',
            'https://rickandmortyapi.com/api/episode/36',
            'https://rickandmortyapi.com/api/episode/37',
            'https://rickandmortyapi.com/api/episode/38',
            'https://rickandmortyapi.com/api/episode/39',
            'https://rickandmortyapi.com/api/episode/40',
            'https://rickandmortyapi.com/api/episode/41',
          ],
          url: 'https://rickandmortyapi.com/api/character/2',
          created: '2017-11-04T18:50:21.651Z',
        },
        {
          id: 14,
          name: 'Alien Morty',
          status: 'unknown',
          species: 'Alien',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/10'],
          url: 'https://rickandmortyapi.com/api/character/14',
          created: '2017-11-04T20:51:31.373Z',
        },
        {
          id: 18,
          name: 'Antenna Morty',
          status: 'Alive',
          species: 'Human',
          type: 'Human with antennae',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
          episode: [
            'https://rickandmortyapi.com/api/episode/10',
            'https://rickandmortyapi.com/api/episode/28',
          ],
          url: 'https://rickandmortyapi.com/api/character/18',
          created: '2017-11-04T22:25:29.008Z',
        },
        {
          id: 21,
          name: 'Aqua Morty',
          status: 'unknown',
          species: 'Humanoid',
          type: 'Fish-Person',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
          episode: [
            'https://rickandmortyapi.com/api/episode/10',
            'https://rickandmortyapi.com/api/episode/22',
          ],
          url: 'https://rickandmortyapi.com/api/character/21',
          created: '2017-11-04T22:39:48.055Z',
        },
        {
          id: 27,
          name: 'Artist Morty',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/27.jpeg',
          episode: [
            'https://rickandmortyapi.com/api/episode/10',
            'https://rickandmortyapi.com/api/episode/28',
          ],
          url: 'https://rickandmortyapi.com/api/character/27',
          created: '2017-11-05T08:59:07.457Z',
        },
        {
          id: 42,
          name: 'Big Head Morty',
          status: 'unknown',
          species: 'Human',
          type: 'Human with giant head',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/42.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/22'],
          url: 'https://rickandmortyapi.com/api/character/42',
          created: '2017-11-05T10:15:53.349Z',
        },
        {
          id: 43,
          name: 'Big Morty',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/43.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/28'],
          url: 'https://rickandmortyapi.com/api/character/43',
          created: '2017-11-05T10:17:04.997Z',
        },
        {
          id: 44,
          name: 'Body Guard Morty',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/44.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/28'],
          url: 'https://rickandmortyapi.com/api/character/44',
          created: '2017-11-05T10:18:11.062Z',
        },
        {
          id: 53,
          name: 'Blue Shirt Morty',
          status: 'unknown',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/53.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/10'],
          url: 'https://rickandmortyapi.com/api/character/53',
          created: '2017-11-05T11:28:38.627Z',
        },
        {
          id: 61,
          name: 'Campaign Manager Morty',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/61.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/28'],
          url: 'https://rickandmortyapi.com/api/character/61',
          created: '2017-11-05T11:53:44.737Z',
        },
        {
          id: 73,
          name: 'Cop Morty',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/73.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/28'],
          url: 'https://rickandmortyapi.com/api/character/73',
          created: '2017-11-30T11:43:04.217Z',
        },
        {
          id: 77,
          name: 'Cowboy Morty',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/77.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/10'],
          url: 'https://rickandmortyapi.com/api/character/77',
          created: '2017-11-30T14:13:17.371Z',
        },
        {
          id: 83,
          name: 'Cronenberg Morty',
          status: 'unknown',
          species: 'Cronenberg',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Cronenberg Earth',
            url: 'https://rickandmortyapi.com/api/location/12',
          },
          location: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/83.jpeg',
          episode: [
            'https://rickandmortyapi.com/api/episode/6',
            'https://rickandmortyapi.com/api/episode/10',
          ],
          url: 'https://rickandmortyapi.com/api/character/83',
          created: '2017-11-30T20:02:29.204Z',
        },
        {
          id: 84,
          name: 'Cult Leader Morty',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Hideout Planet',
            url: 'https://rickandmortyapi.com/api/location/27',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/84.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/10'],
          url: 'https://rickandmortyapi.com/api/character/84',
          created: '2017-11-30T20:41:48.080Z',
        },
        {
          id: 85,
          name: 'Cyclops Morty',
          status: 'Alive',
          species: 'Humanoid',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/85.jpeg',
          episode: [
            'https://rickandmortyapi.com/api/episode/10',
            'https://rickandmortyapi.com/api/episode/28',
          ],
          url: 'https://rickandmortyapi.com/api/character/85',
          created: '2017-11-30T20:49:52.133Z',
        },
        {
          id: 95,
          name: 'Dipper and Mabel Mortys',
          status: 'unknown',
          species: 'Human',
          type: '',
          gender: 'unknown',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/95.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/22'],
          url: 'https://rickandmortyapi.com/api/character/95',
          created: '2017-12-01T11:54:36.670Z',
        },
        {
          id: 113,
          name: 'Eric Stoltz Mask Morty',
          status: 'unknown',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Eric Stoltz Mask Earth',
            url: 'https://rickandmortyapi.com/api/location/33',
          },
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/113.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/10'],
          url: 'https://rickandmortyapi.com/api/character/113',
          created: '2017-12-26T13:43:29.296Z',
        },
        {
          id: 118,
          name: 'Evil Morty',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/118.jpeg',
          episode: [
            'https://rickandmortyapi.com/api/episode/10',
            'https://rickandmortyapi.com/api/episode/28',
          ],
          url: 'https://rickandmortyapi.com/api/character/118',
          created: '2017-12-26T16:13:41.103Z',
        },
        {
          id: 123,
          name: 'Fat Morty',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/123.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/28'],
          url: 'https://rickandmortyapi.com/api/character/123',
          created: '2017-12-26T17:22:40.315Z',
        },
        {
          id: 143,
          name: 'Glasses Morty',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/143.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/28'],
          url: 'https://rickandmortyapi.com/api/character/143',
          created: '2017-12-27T20:37:26.134Z',
        },
      ],
    };

    service.getSearchResponseForCharacter(1, searchQuery).subscribe((data) => {
      expect(data.results).toEqual(page.results);
    });
  });

  it('should get search results for character name and status', () => {
    let searchQuery = { name: 'morty', status: 'dead' };
    let searchResults: CharactersPage;
    let page: CharactersPage = {
      info: { count: 10, pages: 1, next: null, prev: null },
      results: [
        {
          id: 43,
          name: 'Big Morty',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/43.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/28'],
          url: 'https://rickandmortyapi.com/api/character/43',
          created: '2017-11-05T10:17:04.997Z',
        },
        {
          id: 44,
          name: 'Body Guard Morty',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/44.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/28'],
          url: 'https://rickandmortyapi.com/api/character/44',
          created: '2017-11-05T10:18:11.062Z',
        },
        {
          id: 61,
          name: 'Campaign Manager Morty',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/61.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/28'],
          url: 'https://rickandmortyapi.com/api/character/61',
          created: '2017-11-05T11:53:44.737Z',
        },
        {
          id: 73,
          name: 'Cop Morty',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/73.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/28'],
          url: 'https://rickandmortyapi.com/api/character/73',
          created: '2017-11-30T11:43:04.217Z',
        },
        {
          id: 217,
          name: 'Mechanical Morty',
          status: 'Dead',
          species: 'Robot',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/217.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/23'],
          url: 'https://rickandmortyapi.com/api/character/217',
          created: '2017-12-30T14:32:17.158Z',
        },
        {
          id: 234,
          name: 'Morty Smith',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/234.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/6'],
          url: 'https://rickandmortyapi.com/api/character/234',
          created: '2017-12-30T16:35:01.223Z',
        },
        {
          id: 235,
          name: 'Mortytown Loco',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/235.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/28'],
          url: 'https://rickandmortyapi.com/api/character/235',
          created: '2017-12-30T16:37:07.150Z',
        },
        {
          id: 325,
          name: 'Slick Morty',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: { name: 'unknown', url: '' },
          location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/325.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/28'],
          url: 'https://rickandmortyapi.com/api/character/325',
          created: '2018-01-10T16:06:48.366Z',
        },
        {
          id: 360,
          name: 'Toxic Morty',
          status: 'Dead',
          species: 'Humanoid',
          type: "Morty's toxic side",
          gender: 'Male',
          origin: {
            name: 'Detoxifier',
            url: 'https://rickandmortyapi.com/api/location/64',
          },
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/360.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/27'],
          url: 'https://rickandmortyapi.com/api/character/360',
          created: '2018-01-10T18:18:05.422Z',
        },
        {
          id: 499,
          name: 'Fascist Morty',
          status: 'Dead',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth (Fascist Dimension)',
            url: 'https://rickandmortyapi.com/api/location/77',
          },
          location: {
            name: 'Earth (Fascist Dimension)',
            url: 'https://rickandmortyapi.com/api/location/77',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/499.jpeg',
          episode: ['https://rickandmortyapi.com/api/episode/32'],
          url: 'https://rickandmortyapi.com/api/character/499',
          created: '2020-05-02T11:24:36.156Z',
        },
      ],
    };

    service.getSearchResponseForCharacter(1, searchQuery).subscribe((data) => {
      expect(data.results).toEqual(page.results);
    });
  });
});
