import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/withContainer';
import { Avatar } from '@naturacosmeticos/natds-web';
import { tokens } from '@naturacosmeticos/natds-styles';

import AvatarDocs from './Avatar.docs.mdx';

export default {
  title: 'Components|Avatar',
  component: Avatar,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Avatar'],
    theme: {
      context: 'web'
    },
    docs: {
      page: AvatarDocs,
    },
  },
};

const source: any = {
  image: require('../../assets/images/1.png'),
  anonymous: require('../../assets/images/avatar.png'),
  none: null
};

const sizes: any = Object.keys(tokens.avatarSizes);

const colors: any = {
  primary: 'primary',
  secondary: 'secondary',
  default: 'default',
};

export const Interactive = () => (
  <Avatar
    alt={text('alt', 'XD')}
    src={select('source', source, source.image)}
    size={select('size', sizes, 'huge')}
    color={select('color', colors, colors.primary)}
    children={text('children', 'XD')}
  />
);

export const Image = () => (
  <Avatar
    src={source.image}
    alt={text('alt', 'XD')}
    size={select('size', sizes, 'huge')}
  />
);

export const Anonymous = () => (
  <Avatar
    src={source.anonymous}
    alt={text('alt', 'XD')}
    size={select('size', sizes, 'huge')}
    color={select('color', colors, colors.primary)}
  />
);

export const Text = () => (
  <Avatar
    children={text('children', 'XD')}
    alt={text('alt', 'XD')}
    size={select('size', sizes, 'huge')}
    color={select('color', colors, colors.primary)}
  />
);
