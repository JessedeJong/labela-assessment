import * as i from 'types';

import { Button, Heading, PageContainer, Paragraph, Intro } from 'common';
import MainLayout from 'layouts/MainLayout';

const AssignmentIntro: i.NextPageComponent = () => {
  return (
    <PageContainer>
      <Intro>
        <Heading>Hi there!</Heading>
        <Paragraph>
          Welcome at the Label A front-end assignment. In this assignment we will test several
          front-end skills. There are 6 assignments, which are all explained on the page itself. You
          have a maximum of 4 hours, please try not to go over time. We really want to see what you
          are able to do in that 4 hours. The assignment doesn't have to be finished. If you have
          any questions you can email them to{' '}
          <a href="mailto:frontend@labela.nl">frontend@labela.nl</a>, and we'll try to get back to
          you asap.
        </Paragraph>
        <Paragraph>Good luck!</Paragraph>
        <Button buttonType="link" href="/assignment1">
          Let's get started!
        </Button>
      </Intro>
    </PageContainer>
  );
};

AssignmentIntro.layout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default AssignmentIntro;
