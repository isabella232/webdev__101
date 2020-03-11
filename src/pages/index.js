import React from 'react';

import Page from '../components/Page/Page';
import Banner from '../components/Banner/Banner';
import Cards from '../components/Cards/Cards';
import WorkContainer from '../components/workContainer';
import SectionHeader from '../components/SectionHeader';

import content from '../content/content.yaml';

const IndexPage = () => (
  <>
    <Page title="Bodie | Personal Website">
      <Banner
        title={content.banner.name}
        message={content.banner.message}
      />
      <SectionHeader
        title="Projects"
      />
      <Cards cards={content.cards} />
      <SectionHeader
        title={content.employment.title}
        content={content.employment.content}
      />
      <WorkContainer />
    </Page>
  </>
);

export default IndexPage;
