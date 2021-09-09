import { CharacterData } from './character-data';

export class CharactersPage {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };

  results: CharacterData[];
}
