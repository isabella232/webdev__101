import React from 'react';

import Page from '../components/Page/Page';
import Banner from '../components/Banner/Banner';
import Cards from '../components/Cards/Cards';
import Employment from '../components/Employment/Employment';
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
      <div id="employment" />
      <SectionHeader
        title={content.employment.title}
        content={content.employment.content}
      />
      <Employment cards={content.employment.cards} />
    </Page>
  </>
);

export default IndexPage;
