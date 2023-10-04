import React from 'react';

const MenuItem = (props) => {
    const {item, addToMenu} = props;

    return (
        <React.Fragment>
            <button onClick={addToMenu}>Hello</button>
            <span style={{border:'red 1px solid'}}>{item.name}</span><br />
            <span style={{border:'red 1px solid'}}>{item.description}</span><br />
            <span style={{border:'red 1px solid'}}>{item.price}</span><br /><br />
        </React.Fragment>
    )
}

export default MenuItem;
