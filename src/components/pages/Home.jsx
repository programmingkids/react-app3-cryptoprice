import { useContext } from 'react';
import { StateContext } from './../providers/StateContext';
import { PriceList } from './../blocks/PriceList';

export const Home = () => {
  const { prices } = useContext(StateContext);
  return prices !== undefined &&
        <PriceList prices={prices} />;
};
