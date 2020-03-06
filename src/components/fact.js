import React from 'react';
import Async from 'react-async';
import Card from 'react-bootstrap/Card'

const getDogFact = () =>  fetch('https://dog-api.kinduff.com/api/facts?number=5')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

const Fact = () => {

    return (
        <Async promiseFn={getDogFact}>
            {({ data, err, isLoading }) => {
                if (isLoading) return "Loading..."
                if (err) return `Something went wrong: ${err.message}`

                if (data) {
                    data = Object.entries(data.facts)
                    return (
                        <div>
                            <Card border="light"> 
                                <Card.Body>
                                    Here's 5 random dog facts! 
                                    {data.map(fact => <li key={fact[0]}>{fact[1]}</li>)}
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            }}
        </Async>
    );
}

export default Fact;
