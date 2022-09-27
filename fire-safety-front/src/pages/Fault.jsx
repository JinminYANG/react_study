import React from 'react';
import MainHeader from '../components/MainHeader';
import { Col, Row } from 'react-bootstrap';
import Line from '../components/Charts/Highcharts/Line';
import Stock from '../components/Charts/Highcharts/Stock';
import Map from '../components/Charts/Highcharts/Map';

const Fault = () => {
  return (
    <>
      <Row className={'main-content'}>
        <Row>
          <Col>
            <MainHeader title={'Fault'} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Line />
            <Stock />
            <Map />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Fault;
