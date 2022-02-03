import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import Auth from '../utils/auth'

// const Nav = styled.nav.attrs({
//     className: 'navbar-static-top navbar navbar-expand-lg navbar-dark bg-dark',
// })`
//     margin-bottom: 20 px;
// `

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">FIFA VS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/team/list">List Team</Nav.Link>
                        <Nav.Link href="/team/create">Create Team</Nav.Link>
                        <Nav.Link href="/matches">Match Results</Nav.Link>
                    </Nav>
                    <Nav>
                        {Auth.loggedIn() ?
                            <Nav.Link onClick={Auth.logout} href="/">Logout</Nav.Link>
                            :
                            <>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/signup">SignUp</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { NavBar }
