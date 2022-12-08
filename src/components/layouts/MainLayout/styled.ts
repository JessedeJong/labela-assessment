import styled from 'styled-components';

export const Header = styled.header`
  text-align: center;
  padding: 20px 0;
  margin: 0 0 50px;
  background: ${(props) => props.theme.colors.black};

  & > svg {
    width: 140px;
  }
`;
