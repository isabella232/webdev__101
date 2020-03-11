import React from 'react';
import Helmet from 'react-helmet';
import { SocialIcon } from 'react-social-icons';

import Navigation from '../Navigation/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

const Page = ({ title, children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Amatic+SC|Bowlby+One+SC|Permanent+Marker&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div className="site">
      <Navigation />

      <main className="main">
        {children}
      </main>

      <footer>
        <SocialIcon url="http://twitter.com/jaketrent" />
        <SocialIcon url="http://github.com" />
        <SocialIcon url="http://linkedin.com" />
      </footer>
    </div>
  </>
);

export default Page;
