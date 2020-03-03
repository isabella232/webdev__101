import React from 'react';
import Async from 'react-async';
import Card from 'react-bootstrap/Card'

const getDogFact = () =>  fetch('https://dog-api.kinduff.com/api/facts')
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

const Fact = () => {

    return (
        <Async promiseFn={getDogFact}>
            {({ data, err, isLoading }) => {
                if (isLoading) return "Loading..."
                if (err) return `Something went wrong: ${err.message}`

                if (data) {
                    return (
                        <div>
                            <Card border="light"> 
                                <Card.Body>
                                    <Card.Text>
                                        Random dog fact: {data.facts}
                                    </Card.Text>
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
