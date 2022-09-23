import React from 'react';
import Aside from '../components/Aside';
import MainHeader from '../components/MainHeader';
import TotalRequests from '../components/Grafana/KPIs/TotalRequests';
import RequestsPerCountry from '../components/Grafana/KPIs/RequestsPerCountry';
import RealtimeVisitors from '../components/Grafana/KPIs/RealtimeVisitors';
import RequestsPerStatusCode from '../components/Grafana/KPIs/RequestsPerStatusCode';
import NGINXLogsInBytes from '../components/Grafana/KPIs/NGINXLogsInBytes';
import NGINXLogLines from '../components/Grafana/KPIs/NGINXLogLines';
import TotalBytesSent from '../components/Grafana/KPIs/TotalBytesSent';
import PercentOf5xxRequests from '../components/Grafana/KPIs/PercentOf5xxRequests';
import PercentOfRequestsByGooglebot from '../components/Grafana/KPIs/PercentOfRequestsByGooglebot';
import TopCountries from '../components/Grafana/KPIs/TopCountries';
import RecentRequests from '../components/Grafana/KPIs/RecentRequests';
import PercentileOfRequestTime from '../components/Grafana/RequestStatisticsOverTime/PercentileOfRequestTime';
import HTTPStatusCodesOverTime from '../components/Grafana/RequestStatisticsOverTime/HTTPStatusCodesOverTime';
import BytesSent from '../components/Grafana/RequestStatisticsOverTime/BytesSent';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container fluid className={''}>
      <MainHeader title={'Dashboard'} />

      <Row>
        <Col xxl={2} xl={3} lg={3} md={3} sm={3} xs={3}>
          <Aside />
        </Col>
        <Col>
          {/* Dashboard Content*/}

          <TotalRequests />
          <RealtimeVisitors />
          <RequestsPerStatusCode />
          <NGINXLogsInBytes />
          <NGINXLogLines />
          <TotalBytesSent />
          <PercentOf5xxRequests />
          <PercentOfRequestsByGooglebot />
          <RequestsPerCountry />
          <TopCountries />
          <RecentRequests />
          <PercentileOfRequestTime />
          <HTTPStatusCodesOverTime />
          <BytesSent />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
