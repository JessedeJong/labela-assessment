import * as i from 'types';

import { Button, PageContainer, Intro, Paragraph } from 'common';
import MainLayout from 'layouts/MainLayout';
import { Employees } from 'modules';

const Assignment1: i.NextPageComponent = () => {
  return (
    <PageContainer>
      <Intro>
        <h1>Label A 💚 TypeScript!</h1>
        <Paragraph>
          As a front-ender we all know it's really useful to type our code, it can save you a lot of
          time, bugs and headaches. So to make the rest of the excercises a lot smoother we will
          start with some typing.
        </Paragraph>
        <ol>
          <li>
            Type the data returned by <code>useGetTeam</code> in{' '}
            <code>components/modules/Employees</code>
          </li>
          <li>
            Type the props in <code>components/modules/Employee</code>
          </li>
        </ol>
        <Button href="/assignment2" buttonType="link">
          Got it all typed!
        </Button>
      </Intro>
      <Employees />
    </PageContainer>
  );
};

Assignment1.layout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Assignment1;
