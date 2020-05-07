import React from 'react';
import renderer from 'react-test-renderer';

import { Alert, AlertTitle } from '../';

describe('Alert component', () => {
  describe('rendering', () => {
    test('it should match default snapshot', () => {
      const wrapper = renderer.create(<Alert severity="error" ><AlertTitle>Mock Title</AlertTitle></Alert>);
      expect(wrapper.toJSON()).toMatchSnapshot('Error Alert snapshot');
    });

    test('it should match default snapshot', () => {
      const wrapper = renderer.create(<Alert severity="warning" ><AlertTitle>Mock Title</AlertTitle></Alert>);
      expect(wrapper.toJSON()).toMatchSnapshot('Warning Alert snapshot');
    });

    test('it should match default snapshot', () => {
      const wrapper = renderer.create(<Alert severity="info" ><AlertTitle>Mock Title</AlertTitle></Alert>);
      expect(wrapper.toJSON()).toMatchSnapshot('Info Alert snapshot');
    });

    test('it should match default snapshot', () => {
      const wrapper = renderer.create(<Alert severity="success" ><AlertTitle>Mock Title</AlertTitle></Alert>);
      expect(wrapper.toJSON()).toMatchSnapshot('Success Alert snapshot');
    });
  });
});