import React from 'react'
import NavBar from './NavBar'
import Maps from './Maps';
import { Row,Col } from 'react-bootstrap';

const CombineAll = () => {
    return (
        <div>
            <NavBar />
            <Row>
          <Col md={12}>
            <Maps />
          </Col>
        </Row>
        </div>
    )
}

export default CombineAll
