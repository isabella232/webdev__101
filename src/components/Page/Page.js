import React from 'react';
import Helmet from 'react-helmet';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import '../../styles/styles.css';
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

      <Footer />
    </div>
  </>
);

export default Page;
