import React from 'react';
import '../styles/components/main-title.scss';

const Title = props => {
  return <h2 className={'main-title'}>{props.title}</h2>;
};

export default Title;
