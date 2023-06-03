import { useState, useEffect } from 'react';
import { TrendList } from './../blocks/TrendList';
import { getTrend } from './../providers/CryptoAPI';

export const Trend = () => {
  const [ trendData, setTrendData] = useState();
  
  useEffect(() => {
    (async () => {
      const data = await getTrend();
      setTrendData(data);
    })();
  },[]);
  
  return trendData !== undefined && 
    <TrendList trendData={trendData}/>;
};
