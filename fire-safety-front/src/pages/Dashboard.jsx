import React from 'react';
import Aside from '../components/Aside';
import MainHeader from '../components/MainHeader';

const Dashboard = () => {
  return (
    <>
      <MainHeader title={'Dashboard'} />
      <Aside />
      {/* Dashboard Content*/}
      Dashboard
    </>
  );
};

export default Dashboard;
