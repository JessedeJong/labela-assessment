import * as i from 'types';

import { Button, Intro, PageContainer, Paragraph } from 'common';
import MainLayout from 'layouts/MainLayout';
import { Employees } from 'modules';

const Assignment4: i.NextPageComponent = () => {
  return (
    <PageContainer>
      <Intro>
        <h1>Get to know your team!</h1>
        <Paragraph>Good job! I assume you know everyones name by now.</Paragraph>
        <Paragraph>
          You applied as a Front-end Developer, so it would be nice to have quick overview of the
          team. Use the data from the api to get the filter options. We've already added an{' '}
          <code>EmployeeFilter</code> component, please use it to toggle the teams on/off based on
          their function. To make it a little bit more challenging: only display filter options with
          3 or more results, create a new filter option named "Other" for all other functions.
        </Paragraph>
        <Paragraph>Good luck!</Paragraph>
        <Button buttonType="link" href="/assignment5">
          I'm done!
        </Button>
      </Intro>
      <Employees />
    </PageContainer>
  );
};

Assignment4.layout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Assignment4;
