import React from 'react';
import { expect } from 'chai';
import renderer from 'react-test-renderer';

import Icon from '../Components/Icon';
import { tokens, IIconSizes, themes } from '@naturacosmeticos/natds-styles';

const iconSizes = Object.keys(tokens.iconSizes);

describe('Icon component', () => {
  test('should match snapshot - Any valid Icon with standard size', () => {
    const component = renderer.create(<Icon name="filled-action-add" />).toJSON();
    expect(component).matchSnapshot('Icon snapshot - valid icon with standard size');
  });

  iconSizes.forEach((size: string) => {
    test(`should match snapshot - Any valid Icon with ${size} size`, () => {
      const component = renderer.create(<Icon name="filled-action-add" size={size as keyof IIconSizes} theme={themes.natura.light} />).toJSON();
      expect(component).matchSnapshot(`Icon snapshot - valid icon with ${size} size`);
    });
  });

  test(`should match snapshot - Any valid Icon without theme`, () => {
    const component = renderer.create(<Icon name="filled-action-add" />).toJSON();
    expect(component).matchSnapshot(`Icon snapshot - valid Icon without theme`);
  });
});
