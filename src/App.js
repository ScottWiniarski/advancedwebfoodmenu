import logo from './logo.svg';
import React, {useState, useEffect, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './Components/Menu';
import MenuItem from './Components/MenuItem';
import './App.css';

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  
  const mainMenu = [...changableMenu] ;
  const mainCourses = mainMenu.filter( foodType = foodTypes.value == "main");
  
  const appetisers = changableMenu.filter( type = type.name == "appetiser");
  const deserts = changableMenu.filter( type = type.value == "desert");
  const specials = changableMenu.filter(type = type.value == "special") 

  const foodTypes = useRef([
    {id: 1, name: 'main'},
    {id: 2, name: 'appetiser'},
    {id: 3, name: 'desert'},
    {id: 4, name: 'special'},
  ]);

  useEffect(() => {
    let changableMenu = [
      { id: 1, type: foodTypes[0].name, name: "Mushroom and Swiss Burger", description: "A Classic", price: 8.99},
      { id: 2, type: foodTypes[0].name, name: "Steak n Eggs", description: "This'll fill you.", price: 12.59},
      { id: 3, type: "appetiser", name: "Chicken Strips", description: "Crispy", price: 5.99},
      { id: 4, type: foodTypes[1].name, name: "Onion Rings", description: "Crunchy", price: 6.99},
      { id: 5, type: foodTypes[2].name, name: "CheeseCake", description: "Satisfying", price: 4.88},
      { id: 6, type: foodTypes[3].name, name: "Footlong Eclaire", description: "For a limited time", price: 13.88}, 
    ]
  }, []);


  return (
    <React.Fragment>
      <Navbar className="navbar-dark bg-dark">
        <Container fluid>
          Roadside Inn
        </Container>
      </Navbar>

      <Container fluid>
        {/* <Row>
          <h3>Main Courses: ({mainCourses.length}) </h3>
        <Menu
          menu = {mainCourses} />
        </Row> */}

        <Row>
          <Menu
            menu = {appetisers} />
        </Row>

        {/* <Row>
          <Menu
            menu = {deserts} />
        </Row>

        <Row>
          <Menu 
            menu = {specials} />
        </Row> */}
      </Container>

    </React.Fragment>
  );
}

export default App;
