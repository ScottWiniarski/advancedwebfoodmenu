import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Course from './Components/Course';
import './App.css';
import { alignPropType } from 'react-bootstrap/esm/types';

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let mutableCourses = [
      { 
        id: 1, 
        name: "entree", 
        items: [
          {
            id: 1,
            name: "Burger",
            description: "Mushroom and Swiss Burger",
            price: 8.99
          },
          {
            id: 2,
            name: "Steak & Eggs",
            description: "This will fill you up",
            price: 12.59
          },
          {
            id: 8,
            name: "Meat Stew",
            description: "It's got meat, and it ain't solid.",
            price: 9.22
          }
        ]
      },
      {
        id: 2,
        name: "appetizer",
        items: [
          {
            id: 3,
            name: "Chicken Strips",
            description: "Crispy",
            price: 5.99
          },
          {
            id: 4,
            name: "Onion Rings",
            description: "Crunchy",
            price: 6.99
          }
        ]
      },
      {
        id: 3,
        name: "dessert",
        items: [
          {
            id: 5,
            name: "CheeseCake",
            description: "When you need a sweet treat afterwards",
            price: 4.88
          },
          {
            id: 6,
            name: "Walnut Coffee Cake",
            description: "We're not totally sure what's in it, but we can guess.",
            price: 7.32
          }
        ]
      },
      {
        id: 4,
        name: "special",
        items: [
          {
            id: 7,
            name: "FootLong Eclaire",
            description: "For a limited time, buy one today!",
            price: 8.22
          }
        ]
      }
      // { id: 5, course: 'dessert', name: "CheeseCake", description: "Satisfying", price: 4.88},
      // { id: 6, course: 'special', name: "Footlong Eclaire", description: "For a limited time", price: 13.88}, 
    ]
    setCourses(mutableCourses);
  }, []);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let mutableOrders = [

    ]
    setOrders(mutableOrders);
  }, []);

  const addToOrder = (itemName) => {
    console.log(itemName);
  }

  // Add to menu, different types of food like permanent-specials or vegan-only dishes.

  return (
    <React.Fragment>
      <Navbar className="navbar-light bg-dark">
        <Container fluid>
          <Navbar.Brand>
          Roadside Inn
          </Navbar.Brand>
        </Container>
        {/* <button onClick={AddToMenu}>Add to Menu</button> */}
        <hr></hr>
      </Navbar>

      <Container fluid>
        {/* <Row>
          <h3>Current Order:</h3>
          { orders.map(o =>
            <Course key={o.id} items={o.items}></Course>)}
        </Row> */}
        <Col>
        <h3><span style={{fontWeight: 'bold'}}>Our Menu: </span></h3>
        {/* <h3>Our Menu</h3> */}
          { courses.map(c => 
            <Course key={c.id} items={c.items} name={c.name} addToOrder={addToOrder}/>
          )}
        </Col>
        
      </Container>

    </React.Fragment>
  );
}

export default App;
