import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';

const Order = (props) => {
    //const {name, description, price} = props;
    const {name, price} = props;

    return(
        <React.Fragment>
            <tr>
                <td>{name}</td>
                <td>${price}</td>
            </tr>                          
        </React.Fragment>
    );
}

export default Order;