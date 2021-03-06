import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialCheckbox, { CheckboxProps as ICheckboxProps } from '@material-ui/core/Checkbox';
export { CheckboxProps as ICheckboxProps } from '@material-ui/core/Checkbox';

export const Checkbox: FunctionComponent<Omit<ICheckboxProps, 'translate'>> = forwardRef((
  props: Omit<ICheckboxProps, 'translate'>,
  ref: any
) => (
  <MaterialCheckbox {...props} ref={ref} />
));

export default withTheme(Checkbox);
