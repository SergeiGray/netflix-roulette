import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import MovieCard from './movie-card';
import MoviePoster from '../movie-poster';

describe('MovieCard component', () => {
  const data = {
    title: "Ready Player One",
    genres: ["Adventure", "Science Fiction", "Action"],
    id: 333339,
    poster_path: "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    release_date: "2018-03-28",
    vote_average: 8.1
  };

  it('should one element with class .movies-card', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <MovieCard data={data} />
      </MemoryRouter>
    );
    expect(component.find('.movies-card')).toHaveLength(1);
  });

  it('should the lack element with class .movies-card if the date props are not present', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <MovieCard />
      </MemoryRouter>
    );

    expect(component.find('.movies-card')).toHaveLength(0);
  });
});