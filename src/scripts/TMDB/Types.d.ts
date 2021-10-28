export interface MovieItemInt {
  movieItem: {
    title: string;
    poster_path: string;
    adult: Boolean;
    overview: string;
    id: number;
    vote_count: number;
    vote_average: number;
    genre_ids: number[];
    release_date: string;
  };
}
