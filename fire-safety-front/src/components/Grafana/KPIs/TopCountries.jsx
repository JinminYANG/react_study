import React, { useState } from 'react';
import Loading from '../../Loading';

const TopCountries = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <iframe
        src="http://43.201.47.127:3000/d-solo/Nz6kKgtGj/grafana-loki-dashboard-for-nginx-service-mesh?orgId=1&from=1663834858321&to=1663921258321&refresh=15m&panelId=32"
        width="450"
        height="200"
        frameBorder="0"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </>
  );
};

export default TopCountries;
