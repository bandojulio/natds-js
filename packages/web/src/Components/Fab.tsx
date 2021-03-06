import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/core/styles';
import MaterialFab, { FabProps } from '@material-ui/core/Fab';
import { IThemeWeb } from '../Themes';
import { getDefaultTheme } from './shared';

type IFabColor = 'primary' | 'secondary' | 'light';

export interface IFabProps extends React.HtmlHTMLAttributes<HTMLButtonElement>, Pick<FabProps,
  | 'size'
  | 'href'
  | 'disableFocusRipple'
  | 'variant'
  | 'children'
  | 'disabled'
> {
  /**
   * @optional
   * The color of the component
   */
  color?: IFabColor;
  /**
   * @optional
   */
  theme?: IThemeWeb | unknown;
}

export const Fab: FunctionComponent<IFabProps> = forwardRef((
  props: IFabProps,
  ref: any
) => {
  const {
    color = 'primary',
    theme: providerTheme,
    disabled,
    style
  } = props;

  const theme = React.useMemo(() => {
    return getDefaultTheme(providerTheme);
  }, [providerTheme]);

  const colorMap = React.useMemo(() => {
    const { palette } = providerTheme as any;
    return {
      primary: {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText
      },
      secondary: {
        backgroundColor: palette.secondary.main,
        color: palette.secondary.contrastText
      },
      light: {
        backgroundColor: palette.background.default,
        color: palette.background.defaultContrastText
      }
    };
  }, [theme]);

  const colorStyle = !disabled ? colorMap[color] : {};

  return (
    <MaterialFab
      {...props}
      color="inherit"
      style={{ ...colorStyle, ...style }}
      ref={ref}
    />
  );
});

export default withTheme(Fab);
