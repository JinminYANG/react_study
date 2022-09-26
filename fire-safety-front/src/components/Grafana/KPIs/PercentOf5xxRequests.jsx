import React, { useState } from 'react';
import Loading from '../../Loading';

const PercentOf5xxRequests = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <iframe
        src="http://43.201.47.127:3000/d-solo/Nz6kKgtGj/grafana-loki-dashboard-for-nginx-service-mesh?orgId=1&from=1663834803611&to=1663921203611&refresh=15m&panelId=19"
        width="450"
        height="200"
        frameBorder="0"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </>
  );
};

export default PercentOf5xxRequests;
