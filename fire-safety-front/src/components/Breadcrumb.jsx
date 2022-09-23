import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faUser } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumb, Nav } from 'react-bootstrap';
// import '../styles/components/Breadcrumb.scss';

const BreadcrumbExample = props => {
  return (
    <>
      <Nav className="breadcrumb justify-content-end" activeKey="/home">
        <Nav.Item className={'breadcrumb-item'}>
          <Nav.Link href="/">
            <FontAwesomeIcon
              icon={faHouseChimney}
              className={'icon-home me-1'}
            />
            <span>Home</span>
          </Nav.Link>
        </Nav.Item>
        <span className={'divider py-2'}>/</span>
        <Nav.Item className={'breadcrumb-item'}>
          <Nav.Link eventKey="link-1">{props.location}</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default BreadcrumbExample;
