import React from 'react';
import MenuItem from './MenuItem';

const Course = (props) => {
    const {name, items, addToMenu} = props;

    return (
        <React.Fragment>
            <h1>{name[0].toUpperCase() + name.substring(1) + "(s)"} - {items.length} items</h1>
            {items.map( i => 
                <MenuItem key={Number(i.id) + 7} item={i} addToMenu={addToMenu} />
            )}
            <hr />
        </React.Fragment>
    );
}

export default Course;
