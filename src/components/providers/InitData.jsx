import { useEffect, useContext } from "react";
import { StateContext } from "./StateContext";
import { DispatchContext } from "./DispatchContext";
import { getSimplePrice } from "./CryptoAPI";

export const InitData = () => {
  const { prices } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    (async () => {
      if (prices !== undefined) {
        return;
      }
      const data = await getSimplePrice();
      dispatch({
        type: "save",
        payload: {
          data,
        },
      });
    })();
  }, []);

  return;
};
