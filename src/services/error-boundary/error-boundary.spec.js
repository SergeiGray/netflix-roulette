import React from 'react';
import ErrorBoundary from './error-boundary';
import ErrorIndicator from '../../components/error-indicator';

const Something = () => null;
const error = new Error('test');

describe('ErrorBoundary component', () => {
  it('should display wrapped component', () => {
    const component = mount(<ErrorBoundary>
                              <Something/>
                            </ErrorBoundary>);

    expect(component.find(Something)).toHaveLength(1);
  });

  it('should  wrapped component not be displayed if it throws an error', () => {
    const component = mount(<ErrorBoundary>
                              <Something/>
                            </ErrorBoundary>);

    component.find(Something).simulateError(error);

    expect(component.find(Something)).toHaveLength(0);
  });

  it('should display an ErrorMessage if wrapped component throws an error', () => {
    const component = mount(<ErrorBoundary>
                              <Something/>
                            </ErrorBoundary>);

    component.find(Something).simulateError(error);

    expect(component.find(ErrorIndicator)).toHaveLength(1);
  });
});