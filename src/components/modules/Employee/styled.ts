import styled from 'styled-components';

export const EmployeeContainer = styled.div`
  position: relative;
  height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const EmployeeInfo = styled.h3`
  display: flex;
  justify-content: center;
  text-align: center;
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 20px 0;
  z-index: 1;
  color: #FFFFFF;
  bottom: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6909138655462185) 100%);
`;

export const EmployeeModal = styled.div`
  background-color: #FFFFFF;

  h2 {
    margin: 8px 0;
  }

  h4 {
    margin: 4px 0;
  }
`