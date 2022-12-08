import * as React from 'react';
import Link from 'next/link';

import { StyledButton } from './styled';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, buttonType = 'button', isDisabled, onClick, href, ...otherProps }, ref) => {
    const styledButtonProps = {
      isDisabled,
      ref,
    };

    if (buttonType === 'link' && href && !Boolean(onClick)) {
      return (
        <Link href={href} passHref>
          <StyledButton {...styledButtonProps} {...otherProps}>
            {children}
          </StyledButton>
        </Link>
      );
    }

    return (
      <StyledButton onClick={onClick} {...styledButtonProps} {...otherProps}>
        {children}
      </StyledButton>
    );
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  href?: string;
  isDisabled?: boolean;
  buttonType?: 'button' | 'link';
};
