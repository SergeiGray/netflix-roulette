import React from 'react';
import ButtonBig from './button-big';

describe('ButtonBig component', () => {

  it('should one element with class .component-button-big', () => {
    const component = shallow(<ButtonBig/>);

    expect(component.find('.component-button-big')).toHaveLength(1);
  });

  it('should contain the text passed in props name', () => {
    const component = shallow(<ButtonBig name={'Test'}/>);

    expect(component.text()).toEqual('Test');
  });

  it('should call the callback passed to props when the click event occurs', () => {
    const mockCallback = jest.fn(() => {});
    const component = shallow(<ButtonBig clickHandler={mockCallback}/>);

    component.simulate('click');

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it('should return the result of a callback passed to props when a click event occurs', () => {
    const mockCallback = jest.fn(() => {return 'test'});
    const component = shallow(<ButtonBig clickHandler={mockCallback}/>);

    component.simulate('click');

    expect(mockCallback.mock.results[0].value).toBe('test');
  });
});