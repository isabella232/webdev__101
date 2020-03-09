import React from 'react';
import content from '../content/contentYAML.yaml';


const NotFoundPage = () => (
  <div>
    <p>{content.notFound.error}</p>
  </div>
);

export default NotFoundPage;
