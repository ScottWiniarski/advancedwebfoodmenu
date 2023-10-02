import React from 'react';

const MenuItem = (props) => {
    const {item} = props;

    return (
        <React.Fragment>
            <span style={{border:'red 1px solid'}}>{item.name}</span><br />
            <span style={{border:'red 1px solid'}}>{item.description}</span><br />
            <span style={{border:'red 1px solid'}}>{item.price}</span><br /><br />
        </React.Fragment>
    )
}

export default MenuItem;
