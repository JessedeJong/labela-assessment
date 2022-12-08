import * as i from 'types';

import { Button, PageContainer, Intro, Paragraph } from 'common';
import MainLayout from 'layouts/MainLayout';
import { Employees } from 'modules';

const Assignment2: i.NextPageComponent = () => {
  return (
    <PageContainer>
      <Intro>
        <h1>Reveal the team!</h1>
        <Paragraph>
          Great, now we got some typing. It's time for you to meet the team. But wait .. the team is
          hiding from you. I think there might be a small bug in{' '}
          <code>components/modules/Employees</code>. Fix it to reveal the team, and please try not
          to get scared of all those faces. 👻
        </Paragraph>
        <Button href="/assignment3" buttonType="link">
          I see the team!
        </Button>
      </Intro>
      <Employees />
    </PageContainer>
  );
};

Assignment2.layout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Assignment2;
