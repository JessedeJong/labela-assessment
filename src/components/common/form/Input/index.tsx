import * as React from 'react';

import { FormField, FormFieldProps } from 'common';

import { StyledInput, InputWrapper } from './styled';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ autoFocus, disabled, name, label, error, readOnly, margin, ...props }, ref) => {
    return (
      <FormField {...{ name, label, error, margin }}>
        <InputWrapper>
          <StyledInput
            {...{
              ...{ autoFocus, disabled, name, readOnly },
              ...(ref && { ref }),
            }}
            id={name}
            error={Boolean(error)}
            {...props}
          />
        </InputWrapper>
      </FormField>
    );
  },
);

export type InputProps = FormFieldProps & {
  autoFocus?: boolean;
  disabled?: boolean;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
};
