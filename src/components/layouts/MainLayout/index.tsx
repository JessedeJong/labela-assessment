import * as React from 'react';

// import Logo from 'vectors/logo.svg';

import { Header } from './styled';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header>{/* <Logo /> */}</Header>
      {children}
    </>
  );
};

type MainLayoutProps = {
  children: React.ReactNode;
};

export default MainLayout;
