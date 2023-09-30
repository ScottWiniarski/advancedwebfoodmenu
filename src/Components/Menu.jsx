import React, {useState, useEffect, useRef} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Menu = (props) => {
    const {menu} = props;

    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    {menu.map( menuItem => 
                        <Col classname="mt-3" key={menuItem.id}>
                            <MenuItem
                                menuItem = {menuItem}
                            ></MenuItem>
                        </Col>    
                        )}
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Menu;
