import React from 'react';
import Title from './Title';
import Breadcrumb from './Breadcrumb';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import BreadcrumbExample from './Breadcrumb';

const MainHeader = props => {
  return (
    <Container fluid className={''}>
      <Row>
        <Col>
          <Title title={props.title} />
        </Col>
        <Col>
          <BreadcrumbExample location={props.title} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainHeader;
