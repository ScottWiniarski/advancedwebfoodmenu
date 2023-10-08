import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Course from './Components/Course';
import Order from './Components/Order';
import Table from 'react-bootstrap/Table';
import './App.css';
import { alignPropType } from 'react-bootstrap/esm/types';
import { Button } from 'react-bootstrap';

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
      {
        id: 1,
        name: "Burger",
        description: "Mushroom and Swiss Burger",
        price: 8.99
      },
      {
        id: 2,
        name: "CheeseCake",
        description: "When you need a sweet treat afterwards",
        price: 4.88
      },
    ]
    setOrders(mutableOrders);
  }, []);

  const addToOrder = (itemid) => {
    const mutableCourses = [...courses];
    const idx = mutableCourses.findIndex(c => c.id === itemid);
    console.log(mutableCourses[idx]);

    const newOrders = [...orders];
    newOrders.concat(mutableCourses[idx]);

    //console.log(newOrders);
    //setOrders(newOrders);
    //console.log(newOrders);
    
    console.log(itemid);
  }

  // const addToOrder = (itemid) => {
  //   const mutableCourses = [...courses];
  //   for(let i = 0; i<mutableCourses.length; i++ ){
  //     console.log(i.name);
  //     for(let j = 0; j< i.items.length; j++){
  //       console.log(j.name);
  //     }
  //   }
  //   console.log(itemName);
  // }

  // const addToOrder = (categoryid, itemName) => {
  //   console.log(categoryid, itemName);
  // }

  // Add to menu, different types of food like permanent-specials or vegan-only dishes.

  const getOrderTotal = () => {
    let orderSum = 0;
    let mutableOrders = [...orders];
    for(let i = 0; i < mutableOrders.length; i++){
      orderSum += mutableOrders[i].price;
    }

    return orderSum.toFixed(2);
  }

  return (
    <React.Fragment>
      {/* <Navbar className="navbar-light bg-dark"> */}
      <Navbar bg='dark'>
        <Container fluid>
          <Navbar.Brand>
            <span style={{color: 'white'}}>Roadside Inn</span>
            
          </Navbar.Brand>
        </Container>
        <Button className='justify-right'>Add To Menu</Button>
      </Navbar>

      <Container fluid>
      <h3><span style={{fontWeight: 'bold'}}>Current Order: </span></h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              {/* <th>Description</th> */}
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          { orders.map(o =>
            <Order 
              key={o.id} 
              name={o.name}
              // description={o.description}
              price={o.price}
            ></Order>)}
            <tr>
              <td><span style={{fontWeight: 'bolder'}}>Order Total</span></td>
              <td>${getOrderTotal()}</td>
            </tr>
          </tbody>
        </Table>

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
