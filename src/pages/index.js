import React from 'react';

import Page from '../components/Page/Page';
import BannerContainer from '../components/BannerContainer';
import Cards from '../components/Cards';
import WorkContainer from '../components/workContainer';
import SectionHeader from '../components/SectionHeader';

import content from '../content/contentYAML.yaml';

const IndexPage = () => (
  <>
    <Page title="Bodie | Personal Website">
      <BannerContainer
        title={content.banner.name}
        message={content.banner.message}
      />
      <SectionHeader
        title="Projects"
      />
      <Cards />
      <SectionHeader
        title={content.employment.title}
        content={content.employment.content}
      />
      <WorkContainer />
    </Page>
  </>
);

export default IndexPage;
