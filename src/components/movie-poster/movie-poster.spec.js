import React from 'react';
import MoviePoster from './movie-poster';

const component = shallow(<MoviePoster />);

describe('MoviePoster component', () => {
  it('should one element with class .poster__image', () => {
    expect(component.find('.poster__image')).toHaveLength(1);
  });

  it('should one element with class .poster__placeholder', () => {
    expect(component.find('.poster__placeholder')).toHaveLength(1);
  });

  it('should must be missing  element with class .poster__placeholder', () => {
    const image = component.find('.poster__image');

    image.simulate('load');

    expect(component.find('.poster__placeholder')).toHaveLength(0);
  });
});