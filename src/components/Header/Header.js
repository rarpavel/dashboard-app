import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import routes from '../../routes'

const Header = () => (
  <header>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href={routes.dashboard}>Dashboard</Nav.Link>
          <Nav.Link href={routes.reports}>Reports</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </header>
)

export default Header
