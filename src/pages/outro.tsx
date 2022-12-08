import * as i from 'types';

import { PageContainer, Intro, Paragraph, Heading } from 'common';
import MainLayout from 'layouts/MainLayout';

const Outro: i.NextPageComponent = () => {
  return (
    <PageContainer>
      <Intro>
        <Heading>That was it!</Heading>
        <Paragraph>
          Thanks for participating in our Front-End assignment, we hope you had fun doing it and
          maybe already got to know some potentially future colleagues. You can send a repository
          with the code to <a href="mailto:frontend@labela.nl">frontend@labela.nl</a>. We will reach
          out to you in 2/3 business days. Enjoy the rest of your day!
        </Paragraph>
        <Paragraph>The Label A Front-end Team 💚</Paragraph>
        <img src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif" alt="giphy" />
      </Intro>
    </PageContainer>
  );
};

Outro.layout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Outro;
