import React from 'react';
import MovieCardGenres from './movie-card-genres';

describe('MovieCardGenres component', () => {
  const genres = ['Comedy', 'Action'];

  it('should contain the text passed in array props genres', () => {
    const component = shallow(<MovieCardGenres genres={genres}/>);

    expect(component.text()).toEqual('Comedy Action');
  });

  it('should contain the text passed in string props genres', () => {
    const component = shallow(<MovieCardGenres genres={genres[0]}/>);

    expect(component.text()).toEqual('Comedy');
  });

  it('should return null if the genre props are not present', () => {
    const component = shallow(<MovieCardGenres/>);

    expect(component.equals(null)).toEqual(true);
  });
});