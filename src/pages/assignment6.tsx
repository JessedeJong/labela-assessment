import * as i from 'types';

import { Button, PageContainer, Intro, Paragraph, Heading } from 'common';
import MainLayout from 'layouts/MainLayout';
import { Employees } from 'modules';

const Assignment6: i.NextPageComponent = () => {
  return (
    <PageContainer>
      <Intro>
        <Heading>Working at Label A!</Heading>
        <Paragraph>
          Now you got familiar with the team, it's time to be a part of it. The next assignment is
          to add yourself to the team. Create a form on the page using the components in{' '}
          <code>common/form</code> which and use the package <code>react-hook-form</code>. Other
          than that you're totally free how to implement this. Show us what you got!
        </Paragraph>
        <Button href="/outro" buttonType="link">
          I'm done!
        </Button>
      </Intro>
      <Employees />
    </PageContainer>
  );
};

Assignment6.layout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Assignment6;
