import * as i from 'types';

import { Button, PageContainer, Intro, Paragraph } from 'common';
import MainLayout from 'layouts/MainLayout';
import { Employees } from 'modules';

const Assignment5: i.NextPageComponent = () => {
  return (
    <PageContainer>
      <Intro>
        <h1>You rock!</h1>
        <Paragraph>
          Now you know the Front-End team. It's time to zoom in even more, let's get to know a
          specific person and in which office they are working.
        </Paragraph>
        <ol>
          <li>
            We got the data of the employee, but we would like to extend that with some office data.
            Fetch the offices using the api url: <code>/api/offices</code>
          </li>
          <li>
            In the <code>common/interaction</code> folder you can find a <code>Modal</code>{' '}
            component, use it to display all data of an employee in a detail view including the
            office data.
          </li>
        </ol>
        <Button href="/assignment6" buttonType="link">
          Got it!
        </Button>
      </Intro>
      <Employees />
    </PageContainer>
  );
};

Assignment5.layout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Assignment5;
