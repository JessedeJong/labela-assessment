import * as i from 'types';

import { Button, PageContainer, Intro, Paragraph } from 'common';
import MainLayout from 'layouts/MainLayout';
import { Employees } from 'modules';

const Assignment3: i.NextPageComponent = () => {
  return (
    <PageContainer>
      <Intro>
        <h1>Welcome at Label A!</h1>
        <Paragraph>
          Nice to meet you! All those new faces can be overwhelming, so maybe nice to already get to
          know them. So your next assignment is getting to know your "potentially" new collegeaus!
          Display their names and function on top of their image. <br />
          (try to make it look a bit nice 😄✨)
        </Paragraph>
        <Button href="/assignment4" buttonType="link">
          I know all names!
        </Button>
      </Intro>
      <Employees />
    </PageContainer>
  );
};

Assignment3.layout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Assignment3;
