import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import {
  DatePicker as MaterialDatePicker,
  DatePickerProps as DatePickerViewsProps,
} from '@material-ui/pickers/DatePicker';

export { DatePickerViewsProps as IDatePickerViewsProps } from '@material-ui/pickers/DatePicker';

export const DatePicker: FunctionComponent<DatePickerViewsProps> = forwardRef(
  (props: DatePickerViewsProps, ref: any) => {
    return (
      <MaterialDatePicker
        disableToolbar={props.variant === 'inline'}
        {...props}
        ref={ref}
      />
    );
  }
);

export default withTheme(DatePicker);
