import styled, { css } from 'styled-components';

export const StyledInput = styled.input<StyledInputProps>`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 46px;
  padding: 0 8px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-appearance: none;
  line-height: normal;
  overflow: hidden;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:active,
  &:focus {
    caret-color: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
    outline: none;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.colors.red};

      &:active,
      &:focus {
        caret-color: ${({ theme }) => theme.colors.red};
        border-color: ${({ theme }) => theme.colors.red};
        outline: none;
      }
    `};
`;

export type StyledInputProps = {
  error?: boolean;
};

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
