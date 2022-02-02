import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          FIFA VS
          </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create.js">Create Teams</Nav.Link>
            <Nav.Link href="/list.js">List Teams</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    )
}

export default Navigation