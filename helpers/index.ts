export const generateId = () => {
  return Math.floor(Math.random() * 900000) + 100000;
};

export const getParityPrice = (price: number, parity: number): string => {
  return Number(Math.round(price - (parity * price) / 100)).toLocaleString('en-US', {
    currency: 'USD',
  });
};
