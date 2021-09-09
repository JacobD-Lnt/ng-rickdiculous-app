import { EpisodeData } from './episode-data';

export class EpisodesPage {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };

  results: EpisodeData[];
}
