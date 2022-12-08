import * as React from 'react';
import { FieldError } from 'react-hook-form';

import { Label } from 'common';

import { FormFieldsWrapper, FormFieldDescription } from './styled';

export const FormField: React.FC<FormFieldProps> = ({ children, label, name, error, margin }) => {
  return (
    <FormFieldsWrapper margin={margin}>
      {label && <Label htmlFor={name}>{label}</Label>}
      {children}
      {error && (
        <FormFieldDescription isError={!!error}>
          {error?.message || 'Dit veld is verplicht'}
        </FormFieldDescription>
      )}
    </FormFieldsWrapper>
  );
};

export type FormFieldProps = {
  error?: FieldError | any;
  label?: string;
  margin?: string;
  name: string;
};
