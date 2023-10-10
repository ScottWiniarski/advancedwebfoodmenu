import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';

const Order = (props) => {
    //const {name, description, price} = props;
    const {name, price, quantity} = props;

    return(
        <React.Fragment>
            <tr>
                <td><span style={{fontWeight:"bold"}}>{quantity > 1 ? "(" + quantity + "x)" : " " }</span> {name}</td>
                <td>${price}</td>
                {/* <td>{quantity}</td> */}
            </tr>                          
        </React.Fragment>
    );
}

export default Order;