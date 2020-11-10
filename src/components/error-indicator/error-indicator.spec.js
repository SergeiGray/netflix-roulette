import React from 'react';
import ErrorIndicator from './error-indicator.js';

describe('ErrorIndicator component', () => {
  it('should render ErrorIndicator component', () => {
    const component = shallow(<ErrorIndicator/>);

    expect(component).toMatchSnapshot();
  });
});