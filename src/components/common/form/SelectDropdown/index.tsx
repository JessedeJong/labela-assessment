import * as React from 'react';
import Select, { StylesConfig, Props as SelectProps, GroupBase } from 'react-select';

import { FormField, FormFieldProps } from 'common';

import customStyles from './customStyles';

export const SelectDropdown = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  additionalStyles,
  name,
  label,
  error,
  margin,
  ...otherProps
}: SelectDropdownProps<Option, IsMulti, Group>) => {
  const formFieldProps = { name, label, error, margin };
  const selectProps = { ...otherProps };
  const stylingProps = {
    styles: {
      ...customStyles<Option, IsMulti, Group>(),
      ...additionalStyles,
    },
  };

  return (
    <FormField {...formFieldProps}>
      <Select name={name} classNamePrefix="react-select" {...selectProps} {...stylingProps} />
    </FormField>
  );
};

type SelectDropdownProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = SelectProps<Option, IsMulti, Group> &
  FormFieldProps & {
    additionalStyles?: StylesConfig<Option, IsMulti, Group>;
  };
