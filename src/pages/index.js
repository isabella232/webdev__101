import React from 'react';

import Site from '../components/Site';
import Cards from '../components/cards';
import BannerContainer from '../components/bannerContainer';
import WorkContainer from '../components/workContainer';
import content from '../content/contentYAML.yaml';

const IndexPage = () => (
  <>
    <Site title="Bodie | Personal Website">
      <BannerContainer
        title={content.banner.name}
        message={content.banner.message}
      />
      <Cards />
      <WorkContainer />
    </Site>
  </>
);

export default IndexPage;
