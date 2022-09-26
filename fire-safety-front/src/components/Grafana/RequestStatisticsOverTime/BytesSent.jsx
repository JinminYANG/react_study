import React, { useState } from 'react';
import Loading from '../../Loading';

const BytesSent = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <iframe
        src="http://43.201.47.127:3000/d-solo/Nz6kKgtGj/grafana-loki-dashboard-for-nginx-service-mesh?orgId=1&from=1663835035829&to=1663921435829&refresh=15m&panelId=9"
        width="450"
        height="200"
        frameBorder="0"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </>
  );
};

export default BytesSent;
