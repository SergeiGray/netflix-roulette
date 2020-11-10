import React from 'react';
import MovieCardReleaseDate from './movie-card-release-date';

describe('MovieCardReleaseDate component', () => {
  const date = '2000-02-02';

  it('contain the first four characters of the text passed to the details date', () => {
    const component = shallow(<MovieCardReleaseDate date={date}/>);

    expect(component.text()).toEqual('2000');
  });

  it('should return null if the date props are not present', () => {
    const component = shallow(<MovieCardReleaseDate/>);

    expect(component.equals(null)).toEqual(true);
  });
});