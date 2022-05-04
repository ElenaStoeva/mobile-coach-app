import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
// import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { configure } from 'enzyme';
import { render } from '@testing-library/react-native/pure';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';

// configure({ adapter: new Adapter() });

describe('Tests for is_on()', () => {
  const dashboard = new Dashboard();

  test('define is_on', () => {
    expect(typeof dashboard.is_on).toBe('function');
  });

  // This test is for statically filled stars
  // To be changed once the stars are filled dynamically
  test('test True output', () => {
    expect(dashboard.is_on(0)).toBe(true);
    expect(dashboard.is_on(1)).toBe(true);
    expect(dashboard.is_on(2)).toBe(true);
  });

  // This test is for statically filled stars
  // To be changed once the stars are filled dynamically
  test('test False output', () => {
    expect(dashboard.is_on(3)).toBe(false);
    expect(dashboard.is_on(4)).toBe(false);
    expect(dashboard.is_on(5)).toBe(false);
    expect(dashboard.is_on(6)).toBe(false);
  });
});

// snapshot
// it('renders', () => {
//   const renderer = new ShallowRenderer();
//   const wrapper = renderer.render(<Dashboard />);

//   expect(wrapper).toMatchSnapshot();
// });


//TODO: might need to custom renderer to fix redux store requirement for accessing function, currently using shallow copy
// describe('Tests for count_on()', () => {
//   it('should change the password value', () => {


//     // const renderer = new ShallowRenderer();
//     // const renderer = new TestRenderer();
//     // let dashboard = renderer.create(<Dashboard />).getInstance();

//     let dashboard = TestRenderer.create(<Dashboard />).getInstance();

//     expect(dashboard.count_on()).toEqual(3);
    
//     dashboard.switch();

//     expect(dashboard.count_on()).toEqual(4);
//   });

//   //   it('app render without crashing', () => {
//   //     shallow(<Dashboard />);
//   //   });

//   //   it('check if change to stars state', () => {
//   //     const dashboard = shallow(<Dashboard />);
//   //     dashboard.setState({ star_states: [0, 0, 0, 0, 0, 0, 0] });

//   //     expect(dashboard.count_on()).toBe(0);
//   //     // expect(loginComponent.find(Notification).length).toBe(1);
//   //   });
// });
