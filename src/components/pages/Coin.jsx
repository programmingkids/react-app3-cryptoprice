import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StateContext } from './../providers/StateContext';
import { CoinData } from './../blocks/CoinData';
import { getCoinMarket } from './../providers/CryptoAPI';

export const Coin = () => {
  const [ coinData, setCoinData] = useState();
  const { coinName } = useParams();
  
  useEffect(() => {
    (async () => {
      const data = await getCoinMarket(coinName);
      setCoinData(data);
    })();
  },[]);
  
  return coinData !== undefined && <CoinData coinData={coinData}/>;
};
