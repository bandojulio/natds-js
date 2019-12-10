import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';

import { Icon } from '@naturacosmeticos/natds-web';
import { iconNames } from '@naturacosmeticos/natds-icons';
import IconDocs from './Icon.docs.mdx';

export default {
  title: 'Web|Icon',
  component: Icon,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Icon'],
    theme: 'web',
    docs: {
      page: IconDocs
    }
  }
};

const icons = Object.keys(iconNames);

export const Interactive = () => (
  <Icon
    name={select('Icon Name', icons, icons[0])}
  />
);
