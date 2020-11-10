import React from 'react';
import MovieCardRating from './movie-card-rating';

describe('MovieCardRating component', () => {
  const rating = 10;

  it('should contain the text passed in props rating', () => {
    const component = shallow(<MovieCardRating rating={rating}/>);

    expect(component.text()).toEqual('Rating: 10');
  });

  it('should return null if the rating props are not present', () => {
    const component = shallow(<MovieCardRating/>);

    expect(component.equals(null)).toEqual(true);
  });
});