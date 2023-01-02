import styled from 'styled-components';

export const EmployeeContainer = styled.div`
  position: relative;
  height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;
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
