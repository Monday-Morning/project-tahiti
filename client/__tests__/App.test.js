import React from 'react';
import { mount } from 'enzyme';

// components
import ReactLogo from '../src/components/homepage/ReactLogo';

function setup() {
  const wrapper = mount(<ReactLogo />);
  return { wrapper };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should Render a text message', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h1').text()).toEqual('Welcome to React Template');
  });
});
