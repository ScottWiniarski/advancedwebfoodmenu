import React, {useState, useEffect, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Course from './Components/Course';
import './App.css';

const App = () => {
  const [menuItems, setMenuItems] = useState([]);

  const foodTypes = useRef([
    {id: 1, name: 'main'},
    {id: 2, name: 'appetiser'},
    {id: 3, name: 'dessert'},
    {id: 4, name: 'special'},
  ]);

  useEffect(() => {
    let changableMenu = [
      { id: 1, course: "main", name: "Mushroom and Swiss Burger", description: "A Classic", price: 8.99},
      { id: 2, course: "main", name: "Steak n Eggs", description: "This'll fill you.", price: 12.59},
      { id: 3, course: "appetiser", name: "Chicken Strips", description: "Crispy", price: 5.99},
      { id: 4, course: "appetiser", name: "Onion Rings", description: "Crunchy", price: 6.99},
      { id: 5, course: 'dessert', name: "CheeseCake", description: "Satisfying", price: 4.88},
      { id: 6, course: 'special', name: "Footlong Eclaire", description: "For a limited time", price: 13.88}, 
    ]
    setMenuItems(changableMenu);
  }, []);


  return (
    <React.Fragment>
      <Navbar className="navbar-dark bg-dark">
        <Container fluid>
          Roadside Inn
        </Container>
      </Navbar>

      <Container fluid>
          { foodTypes.current.map(ft => 
            <Course course={menuItems.filter(mi => mi.course === ft.name)} course_name={ft.name} />
          )}
      </Container>

    </React.Fragment>
  );
}

export default App;
