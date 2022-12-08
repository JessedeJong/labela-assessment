import * as i from 'types';
import styled from 'styled-components';

export const Paragraph = styled.p<ParagraphProps>`
  font-weight: ${({ weight }) => weight || 500};
  font-size: ${({ size }) => size || 20}px;
  font-family: sans-serif;
  line-height: ${({ lineHeight }) => lineHeight || '1.6em'};
  color: ${({ color }) => color || 'black'};
  margin: ${({ margin }) => margin || '8px 0px 16px'};
  text-align: ${({ align }) => align || 'left'};
`;

export type ParagraphProps = {
  align?: 'center' | 'left' | 'right';
  color?: i.ThemeColors;
  lineHeight?: string;
  margin?: string;
  size?: 12 | 14 | 16 | 18;
  weight?: 300 | 400 | 500 | 600 | 700 | 800;
};
