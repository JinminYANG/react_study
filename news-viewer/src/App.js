/*
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=480574c86c5e4582b8c7e6c78a848588');
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};

export default App;
*/

import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useCallback, useState } from 'react';
import { Route, Router } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  /*
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
  */

  return (
    <Route path={'/:category?'} component={NewsPage} />
  );

};

export default App;