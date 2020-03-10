import React from 'react';
import Async from 'react-async';
import SectionHeader from './SectionHeader';

// eslint-disable-next-line no-undef
const getDogFact = () => fetch('https://dog-api.kinduff.com/api/facts?number=5')
  .then((res) => (res.ok ? res : Promise.reject(res)))
  .then((res) => res.json());

const Fact = () => (
  <SectionHeader
    content={(
      <Async promiseFn={getDogFact}>
        {({ data, err, isLoading }) => {
          if (isLoading) return 'Loading...';
          if (err) return `Something went wrong: ${err.message}`;

          if (data) {
            const dataArray = Object.entries(data.facts);
            return (
              <div>
                <h1>Here are 5 random dog facts!</h1>
                <div>{dataArray.map((fact) => <li key={fact[0]}>{fact[1]}</li>)}</div>
                <a href="http://kinduff.com/dog-api" target="_blank" rel="noopener noreferrer">API for Dog Facts </a>
              </div>
            );
          }

          return null;
        }}
      </Async>
        )}
  />
);

export default Fact;
