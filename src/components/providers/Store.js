export const reducer = (state, action) => {
  switch (action.type) {
    case 'save' : return savePricesData(state, action);
    default: return state;
  }
};

const savePricesData = (state, action) => {
  const { data } = action.payload;
  return {
    ...state,
    prices : data,
  };
};
