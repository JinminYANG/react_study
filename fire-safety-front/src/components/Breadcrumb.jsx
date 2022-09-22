import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faUser } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = props => {
  return (
    <div className={'breadcrumb'}>
      <ul className={'breadcrumb-list'}>
        <li className={'breadcrumb-item'}>
          <FontAwesomeIcon icon={faHouseChimney} className={'icon-home'} />
          <span>Home</span>
        </li>
        <li className={'breadcrumb-item slash'}>/</li>
        <li className={'breadcrumb-item'}>{props.location}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
