import React from 'react';
import Async from 'react-async';
import {
  Row,
  Col,
  Card,
  CardDeck,
  Button,
} from 'react-bootstrap';

import Spacer from '../Spacer/Spacer';

// eslint-disable-next-line no-undef
const getDogFact = () => fetch('https://dog-api.kinduff.com/api/facts?number=5')
  .then((res) => (res.ok ? res : Promise.reject(res)))
  .then((res) => res.json());

const Fact = () => (
  <Async promiseFn={getDogFact}>
    {({ data, err, isLoading }) => {
      if (isLoading) return 'Loading...';
      if (err) return `Something went wrong: ${err.message}`;

      if (data) {
        const dataArray = Object.entries(data.facts);
        return (
          <>
            <CardDeck>
              {dataArray.map((fact) => (
                <Card body key={fact[0]} bg="light">
                  {fact[1]}
                </Card>
              ))}
            </CardDeck>
            <Spacer size={1.5} />
            <div className="text-center">
              <Button href="http://kinduff.com/dog-api" target="_blank" rel="noopener noreferrer" variant="link">
                API for Dog Facts
              </Button>
            </div>
          </>
        );
      }

      return null;
    }}
  </Async>

);

export default Fact;
