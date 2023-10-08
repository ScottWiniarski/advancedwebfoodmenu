import React from 'react';
import { Button, CardBody, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const MenuItem = (props) => {
    const {item, addToOrder} = props;
    // const {item, passCourse} = props;

    const release = (name) => {
        console.log(name)
    }
    return (
        <React.Fragment>
            <Card className='d-flex justify-content-between'style={{width: "18rem"}} >
                
                <Card.Body>
                <Card.Title>
                {item.name}
                </Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    
                    <Card.Subtitle>${item.price} before tax</Card.Subtitle>
                    <Button className='justify-right' onClick={() => addToOrder(item.id)}>Add To Order</Button>
                    {/* <button className='justify-right' onClick={release(item.name)}>Hello</button> */}
                </Card.Body>

            </Card>
            {/* <span style={{border:'red 1px solid'}}>{item.name}</span><br />
            <span style={{border:'red 1px solid'}}>{item.description}</span><br />
            <span style={{border:'red 1px solid'}}>{item.price}</span><br /><br /> */}
        </React.Fragment>
    )
}

export default MenuItem;
