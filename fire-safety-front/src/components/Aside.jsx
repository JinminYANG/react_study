import React from 'react';
import AsideTable from './AsideTable';
import '../styles/components/Aside.scss';

const Aside = () => {
  return (
    <div className={'aside'}>
      <h3>자치구 현황</h3>
      <AsideTable />
    </div>
  );
};

export default Aside;
