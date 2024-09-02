import axios from 'axios';

// 環境変数から取得
const APIURL = import.meta.env.VITE_APIURL;
const APIKEY = import.meta.env.VITE_APIKEY;

export const getSimplePrice = async () => {
  const endpoint = '/simple/price';
  const url = APIURL + endpoint;
  const params = {
    ids: 'bitcoin,tether,ethereum,litecoin,cardano,dogecoin,bnb',
    vs_currencies: 'jpy',
    include_24hr_change: 'true',
  };
  const response = await axios.get(url, {
    params,
  });
  return response.data;
};

export const getCoinMarket = async (coinName) => {
  const endpoint = '/coins/markets';
  const url = APIURL + endpoint;

  const params = {
    ids: coinName,
    vs_currency: 'jpy',
    price_change_percentage: '1h,24h,7d',
  };

  const response = await axios.get(url, {
    params,
  });
  return response.data;
};
