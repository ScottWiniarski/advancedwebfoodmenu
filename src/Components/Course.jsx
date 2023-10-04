import React from 'react';
import MenuItem from './MenuItem';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge';

const Course = (props) => {
    const {name, items, addToMenu} = props;

    return (
        <React.Fragment>
            <h1>{name[0].toUpperCase() + name.substring(1) + "(s)"}
            <Badge bg="secondary" text='light' pill className='ml-2'>{items.length} item(s)</Badge>
            </h1>
            
            {items.map( i => 
                <MenuItem key={Number(i.id) + 7} item={i} addToMenu={addToMenu} />
            )}
            <hr />
        </React.Fragment>
    );
}

export default Course;
