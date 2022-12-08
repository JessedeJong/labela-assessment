import styled, { css } from 'styled-components';

import { ButtonProps } from './';

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  min-width: 200px;
  height: 48px;
  padding: 10px 16px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  border: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.darkGreen};
  }

  @media (min-width: 992px) {
    transition: background-color 0.2s, border-color 0.2s;

    + button {
      margin: 0 0 0 8px;
    }
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.lightGray};
      cursor: not-allowed;

      &:focus {
        background-color: ${({ theme }) => theme.colors.lightGray};
      }
    `};
`;
