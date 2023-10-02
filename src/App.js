import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Course from './Components/Course';
import './App.css';

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let mutableCourses = [
      { 
        id: 1, 
        name: "main", 
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
            description: "This wil fill you up",
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
      }
      // { id: 5, course: 'dessert', name: "CheeseCake", description: "Satisfying", price: 4.88},
      // { id: 6, course: 'special', name: "Footlong Eclaire", description: "For a limited time", price: 13.88}, 
    ]
    setCourses(mutableCourses);
  }, []);


  return (
    <React.Fragment>
      <Navbar className="navbar-dark bg-dark">
        <Container fluid>
          Roadside Inn
        </Container>
      </Navbar>

      <Container fluid>
          { courses.map(c => 
            <Course key={c.id} items={c.items} name={c .name} />
          )}
      </Container>

    </React.Fragment>
  );
}

export default App;
