import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => (
  <Container fluid className="main-container">
    <Row>
      <Col>
        <Header />
      </Col>
    </Row>
    <Row style={{ flexGrow: '1' }}>
      <Col>{children}</Col>
    </Row>
    <Row>
      <Col>
        <Footer />
      </Col>
    </Row>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
