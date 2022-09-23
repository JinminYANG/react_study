import React from 'react';
import { Table } from 'react-bootstrap';

const AsideTable = () => {
  return (
    <div>
      <Table striped bordered hover className={'text-center'}>
        <thead>
          <tr>
            <th>자치구</th>
            <th>N/S</th>
            <th>G/W</th>
            <th>단말</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>강남구</td>
            <td>Mark</td>
            <td>122/0</td>
            <td>4,926/0</td>
          </tr>
          <tr>
            <td>강남구</td>
            <td>Mark</td>
            <td>122/0</td>
            <td>4,926/0</td>
          </tr>
          <tr>
            <td>강남구</td>
            <td>Mark</td>
            <td>122/0</td>
            <td>4,926/0</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AsideTable;
