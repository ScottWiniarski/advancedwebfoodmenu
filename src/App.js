import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
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

  const AddToMenu = () => {
    console.log("Hello");
  }

  return (
    <React.Fragment>
      <Navbar className="navbar-dark bg-dark">
        <Container fluid>
          Roadside Inn
        </Container>
        <button onClick={AddToMenu}>Add to Menu</button>
        <hr></hr>
      </Navbar>

      <Container fluid>
        <h3><span style={{fontWeight: 'bold'}}>Our Menu: </span></h3>
        {/* <h3>Our Menu</h3> */}
          { courses.map(c => 
            <Course key={c.id} items={c.items} name={c.name} addToMenu={AddToMenu}/>
          )}
      </Container>

    </React.Fragment>
  );
}

export default App;
