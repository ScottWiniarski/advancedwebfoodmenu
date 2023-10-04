import React from 'react';
import { CardBody, CardTitle } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const MenuItem = (props) => {
    const {item, addToMenu} = props;

    return (
        <React.Fragment>
            <Card className='d-flex justify-content-between'style={{width: "18rem"}} >
                
                <Card.Body>
                <Card.Title>
                {item.name}
                </Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    
                    <Card.Subtitle>${item.price} before tax</Card.Subtitle>
                </Card.Body>

            </Card>
            <button onClick={addToMenu}>Hello</button>
            {/* <span style={{border:'red 1px solid'}}>{item.name}</span><br />
            <span style={{border:'red 1px solid'}}>{item.description}</span><br />
            <span style={{border:'red 1px solid'}}>{item.price}</span><br /><br /> */}
        </React.Fragment>
    )
}

export default MenuItem;
