import React from 'react';
import Title from './Title';
import Breadcrumb from './Breadcrumb';

const MainHeader = props => {
  return (
    <div>
      <Title title={props.title} />
      <Breadcrumb location={props.title} />
    </div>
  );
};

export default MainHeader;
