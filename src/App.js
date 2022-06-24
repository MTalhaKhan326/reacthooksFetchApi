import Contact from './Contact';
import Users from './Users';
import Createuser from './Createuser.js';
import Home from './Home';
import {Link,Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <>
    <Router>

    <Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
      <Nav.Link href="#features"><Link to='/about'>About</Link></Nav.Link>
      <Nav.Link href="#pricing"> <Link to='/contact'>Contact</Link></Nav.Link>
      <Nav.Link href="#features"><Link to='/list'>UserList</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to='/create'>CreateUser</Link></Nav.Link>
    </Nav>
    
  </Navbar>
  <Routes>
      <Route exact path="/create" element={<Users />} />
      <Route exact path="/about" element={<Createuser />} />
    </Routes>
  
          
       

    </Router>
    </>
  );
}

export default App;
