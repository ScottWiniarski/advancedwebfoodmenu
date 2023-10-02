import React from 'react';
import MenuItem from './MenuItem';

const Course = (props) => {
    const {name, items} = props;

    return (
        <React.Fragment>
            <h1>{name} - {items.length} items</h1>
            {items.map( i => 
                <MenuItem key={Number(i.id) + 7} item={i} />
            )}
            <hr />
        </React.Fragment>
    );
}

export default Course;
