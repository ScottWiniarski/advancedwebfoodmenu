import React from 'react';
import MenuItem from './MenuItem';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Course = (props) => {
    const {name, items, addToMenu} = props;
    const plural = items.length > 1 ? "s" : "";

    return (
        <React.Fragment>
            
            <h1>{name[0].toUpperCase() + name.substring(1) + plural}
            <Badge bg="secondary" text='light' pill className='ml-2'>{items.length} item{plural}</Badge>
            </h1>
            <Row>
            {items.map( i => 
                <MenuItem key={Number(i.id) + 7} item={i} addToMenu={addToMenu} />
            )}
            <hr />
            </Row>
        </React.Fragment>
    );
}

export default Course;
