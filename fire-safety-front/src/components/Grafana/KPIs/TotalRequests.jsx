import React, { useState } from 'react';
import Loading from '../../Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const TotalRequests = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();
  // const url = `http://43.201.47.127:3000/d-solo/Nz6kKgtGj/grafana-loki-dashboard-for-nginx-service-mesh?orgId=1&from=1663826333206&to=1663912733206&panelId=4`;

  return (
    <>
      {isLoading ? <Loading /> : <></>}
      {/*<Loading />*/}
      <iframe
        // src={url}
        src={`${process.env.REACT_APP_GRAFANA_HOST_AND_KEY}/grafana-loki-dashboard-for-nginx-service-mesh?orgId=1&from=1663826333206&to=1663912733206&panelId=1`}
        width="450"
        height="200"
        frameBorder="0"
        onLoad={() => setIsLoading(false)}
        id={'totalRequestsGraph'}
      ></iframe>
      {/*<FontAwesomeIcon
        icon={faRefresh}
        className={''}
        onClick={() => navigate(0)}
      />*/}
      {/*<span>{process.env.REACT_APP_GRAFANA_HOST}</span>*/}
    </>
  );
};

export default TotalRequests;
